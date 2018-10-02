import { Component, OnInit } from '@angular/core';
import { fadeAnimation, routerTransition } from './router.animations';
import { WebSocketSubject, webSocket } from 'rxjs/websocket';
import { WcsService } from './wcs.service';
import { Router } from '@angular/router';
import { catchError, filter, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { StartupService } from './startup.service';
import { UpdateType } from './classes/update-type';
import { NavbarService } from './navbar/navbar.service';
import { ServerMessagesService } from './server-messages.service';



@Component({
  selector: 'app-root',
  animations: [ routerTransition, fadeAnimation ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],

})
export class AppComponent implements OnInit {

  constructor(private wcsService: WcsService,
    private startup: StartupService,
    private serverMessage: ServerMessagesService,
    private router: Router
    ) {}

  private serverMessages = [];
  title = 'pallet-scan';

  showPopup = true;
  popupData = {
    type: 'popup',
    data: 'the retro encablulator fluid is low',
    textColor: 'rgb(255,0,0)',
    backgroundColor: 'rgb(233,222,12)',
    borderColor: 'rgb(45,44,123',
    buttons: [{
      data: 'si',
      textcolor: 'rgb(54,44,122)',
      buttoncolor: 'rgb(200,22,45)'
    }, {
      data: 'no',
      textcolor: 'rgb(54,44,122)',
      buttoncolor: 'rgb(200,22,45)'
    }, {
      data: 'cancelar',
      textcolor: 'rgb(54,44,122)',
      buttoncolor: 'rgb(200,22,45)'
    }]
  }

  ngOnInit(): void {

    console.log(this.startup.startupData);

    this.serverMessage.startListening();
    // send heartbeat to server
    this.wcsService.changeScreen(this.router.url).pipe(catchError(s => {
      alert(s);
      return s;
    })).subscribe();

  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  popupButtonClicked(button) {
    console.log(button.data);
  }

}
