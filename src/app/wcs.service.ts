import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from './classes/environment';
import { tap, switchMap, catchError, map } from 'rxjs/operators';
import { Observable, interval, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WcsService {

  userId = '';
  started = false;
  systemReady = true;
  screenData: any;
  constructor(private http: HttpClient, private router: Router) { }
  onDataUpdate = new EventEmitter<any>();

  startPalletScan(): Observable<any> {
    return this.http.get(Environment.wcsURL + `/start-pallet-scan?userId=${this.userId}`).pipe(tap(resp => {
      this.started = true;
    }, error => {
      console.log(error);
    }));
  }

  stopPalletScan(): Observable<any> {
    return this.http.get(Environment.wcsURL + `/stop-pallet-scan?userId=${this.userId}`).pipe(tap(resp => {
      this.started = false;
    }, error => {
      console.log(error);
    }));
  }

  changeScreen(url: string): Observable<any> {
    return this.http.get(`${Environment.wcsURL}/change-screen?screen=${url}`);
  }

  sendStatus(): Observable<any> {
    if (this.router.url === '/')
      return of(true);
    let retries = 0;
    return interval(1000).pipe(switchMap(() => {
      return this.http.get(`${Environment.wcsURL}/update-status?screen=${this.router.url}`)
      .pipe(tap(() => retries = 0), catchError(s => {
        retries++;
        if (retries > 100)
          return throwError("failed to reach server");
        return of(true);
      }));
    }));
  }

  getScreenData(): Observable<any> {
    if (this.router.url === '/')
      return of(true);
    else {
      return this.http.get(`${Environment.wcsURL}/screen-data?screen=${this.router.url}`)
      .pipe(tap(resp => {
        this.onDataUpdate.emit(resp);
        this.screenData = resp;
      }));
    }
    
  }


}
