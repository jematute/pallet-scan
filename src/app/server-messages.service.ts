import { Injectable } from '@angular/core';
import { StartupService } from './startup.service';
import { NavbarService } from './navbar/navbar.service';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { WcsService } from './wcs.service';

@Injectable({
  providedIn: 'root'
})
export class ServerMessagesService {

  constructor(private wcsService: WcsService, private startup: StartupService, private navbar: NavbarService) {
  }

  connectToWebSocket() {
  
  }

  startListening() {
    const rws = new ReconnectingWebSocket(this.startup.startupData.wcsWSURL);
    rws.addEventListener('open', () => {
      console.log('opened websocket');
    });

    rws.addEventListener('message', resp => {
      const response = resp as any;
      let data;
      data = JSON.parse(response.data);
      if (data.message) {
        data = data.message;
      }
      //console.log('message from server: ', resp)
      switch (data.type) {
        case 'userupdate':
          this.navbar.onUpdateLoginBox.emit(data);
          break;
        case 'casedataupdate': 
          this.wcsService.getCaseData().subscribe();
          break;
        case 'palletscanupdate':
          this.wcsService.palletScanUpdate(data);
          break;
        case 'palletidupdate':
          this.wcsService.palletIdUpdate(data);
          break;
        case 'palletstatusupdate':
          this.wcsService.palletStatusUpdate(data);
          break;
        case 'wrapenableupdate':
          this.wcsService.wrapEnableUpdate(data);
        case 'alarmgridupdate':
          this.wcsService.getAlarmData().subscribe();
          break;
        case 'systemstatusupdate':
          this.wcsService.systemStatusUpdate(data);
          break;
        case 'startbuttonupdate':
          this.wcsService.startButtonUpdate(data);
          break;
        case 'stopbuttonupdate':
          this.wcsService.stopButtonUpdate(data);
          break;
        case 'casehistoryupdate':
          this.wcsService.getCaseData().subscribe();
          break;
        case 'alarmhistorygridupdate':
          this.wcsService.getAlarmData().subscribe();
          break;
        case 'iodataupdate':
          this.wcsService.getIOData().subscribe();
          break;
        case 'usersetupupdate':
          this.wcsService.getUserData().subscribe();
          break;
        case 'popup':
          this.wcsService.onPopUp.emit(data);
          break;
        case 'popupclose':
          this.wcsService.onPopupClose.emit();
          break;
      }
    });

    // // subscribe to messages
    // ws.pipe(map(resp => resp.message), retryWhen(_ => {
    //   return interval(2000).pipe(flatMap(count => {
    //     if (count === 10) {
    //       throwError('giving up');
    //     } else {> 
    //       return of(count);
    //     }
    //   }));
    // })).subscribe(message => {
    //   switch (message.type) {
    //     case 'userupdate':
    //       this.navbar.getLoginBoxData();
    //   }

    //   console.log(message);
    // }, error => {
    //   console.log(error);
    // }, () => {
    //   console.warn('Completed');
    // });
  }


}
