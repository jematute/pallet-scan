import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CaseHistoryComponent } from './case-history/case-history.component';
import { AlarmHistoryComponent } from './alarm-history/alarm-history.component';
import { IoMonitorComponent } from './io-monitor/io-monitor.component';
import { UserSetupComponent } from './user-setup/user-setup.component';
import { ChangeGuard } from './change.guard';

const routes = [ 
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [ ChangeGuard ]
  }, {
    path: 'case-history',
    component: CaseHistoryComponent,
    canActivate: [ ChangeGuard ]
  }, {
    path: 'alarm-history',
    component: AlarmHistoryComponent,
    canActivate: [ ChangeGuard ]
  }, {
    path: 'io-monitor',
    component: IoMonitorComponent,
    canActivate: [ ChangeGuard ]
  }, {
    path: 'user-setup',
    component: UserSetupComponent,
    canActivate: [ ChangeGuard ] 
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
