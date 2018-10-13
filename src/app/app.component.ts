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

  showPopup = false;
  popupData: any;

  ngOnInit(): void {

    console.log(this.startup.startupData);

    this.serverMessage.startListening();
    // send heartbeat to server
    this.wcsService.changeScreen(this.router.url).pipe(catchError(s => {
      alert(s);
      return s;
    })).subscribe();

    this.wcsService.onPopUp.subscribe(data => {
      this.popupData = data;
      this.showPopup = true;
    });

    this.wcsService.onPopupClose.subscribe(data => {
      this.showPopup = false;
    })

  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  popupButtonClicked(button) {
    this.wcsService.popupButton({ popupdata: this.popupData.data, buttondata: button.data }).subscribe(resp => {
    });
  }



}
