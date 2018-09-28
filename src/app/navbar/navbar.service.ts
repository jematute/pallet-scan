import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StartupService } from '../startup.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private startup: StartupService, private http: HttpClient) { }

  loginId = "";
  loginBoxFontColor = "rbg(0,0,0)";
  loginBoxBackgrodundColor = "rbg(255,255,255)";

  getLoginBoxData() {
    return this.http.get(`${this.startup.startupData.wcsURL}/getlogindata`).subscribe(resp => {
      const data = resp as any;
      this.loginId = data.data;
      this.loginBoxFontColor = data.textColor;
      this.loginBoxBackgrodundColor = data.backgroundColor;
    });
  }

  sendLoginData(user: string) {
    return this.http.get(`${this.startup.startupData.wcsURL}/eventuserlogin?user=${user}`).subscribe();
  }

}
