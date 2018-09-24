import { Component } from '@angular/core';
import { fadeAnimation, routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  animations: [ routerTransition, fadeAnimation ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  
})
export class AppComponent {
  title = 'pallet-scan';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
