import { Component, OnInit } from '@angular/core';
import { fadeAnimation, routerTransition } from './router.animations';
import { WebSocketSubject, webSocket } from 'rxjs/websocket';
import { ServerMessage } from './classes/server-message';

const ws: WebSocketSubject<any> = webSocket('ws://localhost:3000');

@Component({
  selector: 'app-root',
  animations: [ routerTransition, fadeAnimation ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  
})
export class AppComponent implements OnInit {

  
  private serverMessages = [];

  ngOnInit(): void {
    ws.subscribe(message => {
      console.log(message);
    }, error => {
      console.log(error);
    }, () => {
      console.warn("Completed");
    })
  }
  title = 'pallet-scan';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
