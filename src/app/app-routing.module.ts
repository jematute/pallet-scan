import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CaseHistoryComponent } from './case-history/case-history.component';
import { AlarmHistoryComponent } from './alarm-history/alarm-history.component';
import { IoMonitorComponent } from './io-monitor/io-monitor.component';
import { UserSetupComponent } from './user-setup/user-setup.component';

const routes = [ 
  { 
    path: 'home', 
    component: HomeComponent 
  }, {
    path: 'case-history',
    component: CaseHistoryComponent
  }, {
    path: 'alarm-history',
    component: AlarmHistoryComponent
  }, {
    path: 'io-monitor',
    component: IoMonitorComponent
  }, {
    path: 'user-setup',
    component: UserSetupComponent 
  }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
