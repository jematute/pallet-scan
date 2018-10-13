import {
  Injectable,
  EventEmitter
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Environment
} from './classes/environment';
import {
  tap,
  switchMap,
  catchError,
  map
} from 'rxjs/operators';
import {
  Observable,
  interval,
  of ,
  throwError
} from 'rxjs';
import {
  Router
} from '@angular/router';
import {
  StartupService
} from './startup.service';
import { User } from './classes/user';


@Injectable({
  providedIn: 'root'
})
export class WcsService {

  userId = '';
  started = false;
  systemReady = true;
  screenData: any;
  constructor(private http: HttpClient, private router: Router, private startup: StartupService) {}
  onDataUpdate = new EventEmitter < any > ();
  onPalletIdUpdate = new EventEmitter < any > ();
  onPalletScanUpdate = new EventEmitter < any > ();
  onPalletStatusUpdate = new EventEmitter < any > ();
  onWrapEnableUpdate = new EventEmitter < any > ();
  onAlarmGridUpdate = new EventEmitter < any > ();
  onSystemStatusUpdate = new EventEmitter<any>();
  onStartButtonUpdate = new EventEmitter<any>();
  onStopButtonUpdate = new EventEmitter<any>();
  onIODataUpdate = new EventEmitter<any>();
  onUserDataUpdate = new EventEmitter<any>();
  onPopUp = new EventEmitter<any>();
  onPopupClose = new EventEmitter<any>();
  
  startPalletScan(): Observable < any > {
    return this.http.get(this.startup.startupData.wcsURL + `/startscan`).pipe(tap(resp => {
      this.started = true;
    }, error => {
      console.log(error);
    }));
  }

  stopPalletScan(): Observable < any > {
    return this.http.get(this.startup.startupData.wcsURL + `/stopscan`).pipe(tap(resp => {
      this.started = false;
    }, error => {
      console.log(error);
    }));
  }

  changeScreen(url: string): Observable < any > {
    const screenMap = new Map();
    screenMap.set("/home", "Home");
    screenMap.set("/case-history", "Case History");
    screenMap.set("/alarm-history", "Alarm History");
    screenMap.set('/io-monitor', "I/O Monitor");
    screenMap.set('/user-setup', 'User Setup');

    const screen = encodeURIComponent(screenMap.get(url));
    if (screen)
      return this.http.get(`${this.startup.startupData.wcsURL}/change-screen?screen=${screen}`);
    else
      return of(true);
  }

  sendStatus(): Observable < any > {
    let retries = 0;
    const delay = this.startup.startupData.statusInterval * 1000;
    return interval(delay).pipe(switchMap(() => {
      return this.http.get(`${this.startup.startupData.wcsURL}/update-status?screen=${this.router.url}`)
        .pipe(tap(() => retries = 0), catchError(s => {
          retries++;
          if (retries > 100) {
            return throwError('failed to reach server');
          }
          return of(true);
        }));
    }));
  }

  getCaseData(): Observable < any > {
    return this.http.get(`${this.startup.startupData.wcsURL}/hmigetcasedata`)
      .pipe(tap(resp => {
        this.onDataUpdate.emit(resp);
      }));
  }

  toggleGoodCases(value: boolean) {
    return this.http.get(`${this.startup.startupData.wcsURL}/casetableshowgoodcases?data=${value}`);
  }

  toggleErrorCases(value: boolean) {
    return this.http.get(`${this.startup.startupData.wcsURL}/casetableshowerrorcases?data=${value}`);
  }

  palletIdUpdate(data: any) {
    this.onPalletIdUpdate.emit(data);
  }

  palletScanUpdate(data: any) {
    this.onPalletScanUpdate.emit(data);
  }

  palletStatusUpdate(data: any) {
    this.onPalletStatusUpdate.emit(data);
  }

  wrapEnable(user: string) {
    return this.http.get(`${this.startup.startupData.wcsURL}/eventwrapenable?user=${user}`);
  }

  wrapEnableUpdate(data: any) {
    this.onWrapEnableUpdate.emit(data);
  }

  systemStatusUpdate(data: any) {
    this.onSystemStatusUpdate.emit(data);
  }

  startButtonUpdate(data: any) {
    this.onStartButtonUpdate.emit(data);
  }

  stopButtonUpdate(data: any) {
    this.onStopButtonUpdate.emit(data);
  }

  getAlarmData(): Observable < any > {
    return this.http.get(`${this.startup.startupData.wcsURL}/hmigetalarmdata`)
        .pipe(tap(resp => {
          this.onAlarmGridUpdate.emit(resp);
    }));
  }

  getIOData(): Observable < any > {
    return this.http.get(`${this.startup.startupData.wcsURL}/hmigetiodata`)
        .pipe(tap(resp => {
          this.onIODataUpdate.emit(resp);
    }));
  }


  getUserData(): Observable<User[]> {
    return this.http.get(`${this.startup.startupData.wcsURL}/hmigetusersetupdata`)
    .pipe(map(resp => resp as User[]), tap(users => {
      this.onUserDataUpdate.emit(users);
    }));
  }

  userUpdate(data: any) {
    return this.http.post(`${this.startup.startupData.wcsURL}/userupdateapply`, JSON.stringify(data), { 
      headers: { 'Content-Type': 'application/json' }
    })
    .pipe(switchMap(() => {
      return this.getUserData();
    }));
  }

  popupButton(data: any) {
    return this.http.post(`${this.startup.startupData.wcsURL}/popupbutton`, JSON.stringify(data), { 
      headers: { 'Content-Type': 'application/json' }
    });
  }



}
