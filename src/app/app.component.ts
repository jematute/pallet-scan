import { Component, OnInit } from '@angular/core';
import { fadeAnimation, routerTransition } from './router.animations';
import { WebSocketSubject, webSocket } from 'rxjs/websocket';
import { ServerMessage } from './classes/server-message';
import { WcsService } from './wcs.service';
import { Router } from '@angular/router';
import { catchError, filter, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { StartupService } from './startup.service';
import { UpdateType } from './classes/update-type';

const ws: WebSocketSubject<any> = webSocket('ws://localhost:3000');

@Component({
  selector: 'app-root',
  animations: [ routerTransition, fadeAnimation ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],

})
export class AppComponent implements OnInit {

  constructor(private wcsService: WcsService, private router: Router, private startup: StartupService) {
  }

  private serverMessages = [];
  title = 'pallet-scan';

  ngOnInit(): void {

    console.log(this.startup.startupData);

    // subscribe to messages
    ws.pipe(map(resp => resp.message)).subscribe(message => {
      switch (message.type as UpdateType) {
        case UpdateType.HOME:
          this.wcsService.getScreenData().subscribe();
      }

      console.log(message);
    }, error => {
      console.log(error);
    }, () => {
      console.warn('Completed');
    });

    // send heartbeat to server
    this.wcsService.sendStatus().pipe(catchError(s => {
      alert(s);
      return s;
    })).subscribe();

  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
