import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StartupService } from '../startup.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private startup: StartupService, private http: HttpClient) { }

  
  onUpdateLoginBox = new EventEmitter<any>();


  sendLoginData(user: string) {
    return this.http.get(`${this.startup.startupData.wcsURL}/eventuserlogin?user=${user}`).subscribe();
  }

}
