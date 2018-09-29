import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/websocket';
import { StartupService } from './startup.service';
import { map, retryWhen, flatMap } from 'rxjs/operators';
import { NavbarService } from './navbar/navbar.service';
import { ServerMessage, MessageType } from './classes/server-message';
import { interval, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerMessagesService {

  constructor(private startup: StartupService, private navbar: NavbarService) {
  }

  connectToWebSocket() {
    const ws: WebSocketSubject<any> = webSocket(`${this.startup.startupData.wcsWSURL}`);
    return ws;
  }

  startListening() {
    // // subscribe to messages
    // ws.pipe(map(resp => resp.message), retryWhen(_ => {
    //   return interval(2000).pipe(flatMap(count => {
    //     if (count === 10) {
    //       throwError('giving up');
    //     } else {
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
