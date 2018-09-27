import { Component, OnInit } from '@angular/core';
import { fadeAnimation, routerTransition } from './router.animations';
import { WebSocketSubject, webSocket } from 'rxjs/websocket';
import { ServerMessage } from './classes/server-message';
import { WcsService } from './wcs.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const ws: WebSocketSubject<any> = webSocket('ws://localhost:3000');

@Component({
  selector: 'app-root',
  animations: [ routerTransition, fadeAnimation ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  
})
export class AppComponent implements OnInit {

  constructor(private wcsService: WcsService, private router: Router) {

  }
  
  private serverMessages = [];

  ngOnInit(): void {
    //subscribe to messages
    ws.subscribe(message => {
      console.log(message);
    }, error => {
      console.log(error);
    }, () => {
      console.warn("Completed");
    });

    // send heartbeat to server
    this.wcsService.sendStatus().pipe(catchError(s => {
      alert(s);
      return s;
    })).subscribe();

  }
  title = 'pallet-scan';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
