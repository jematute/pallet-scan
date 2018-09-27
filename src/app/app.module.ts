import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CaseHistoryModule } from './case-history/case-history.module';
import { FormsModule } from '@angular/forms';
import { AlarmHistoryModule } from './alarm-history/alarm-history.module';
import { IoMonitorModule } from './io-monitor/io-monitor.module';
import { UserSetupModule } from './user-setup/user-setup.module';
import { WcsService } from './wcs.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StartupService } from './startup.service';

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NavbarModule,
    BrowserAnimationsModule,
    CaseHistoryModule,
    FormsModule,
    AlarmHistoryModule,
    IoMonitorModule,
    UserSetupModule,
    HttpClientModule
  ],
  providers: [ WcsService, HttpClient, StartupService,
    {
        // Provider for APP_INITIALIZER
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [StartupService],
        multi: true
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
