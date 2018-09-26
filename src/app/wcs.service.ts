import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from './classes/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WcsService {

  userId = '';
  started = false;
  systemReady = true;
  constructor(private http: HttpClient) { }

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


}
