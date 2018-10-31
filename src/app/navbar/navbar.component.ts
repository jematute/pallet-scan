import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { WcsService } from '../wcs.service';
import { NavbarService } from './navbar.service';

declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(public navService: NavbarService, public router: Router, public wcsService: WcsService) {
    this.date = this.getCurrentDate();
  }

  loginId = '';
  loginBoxFontColor = 'rbg(0,0,0)';
  loginBoxBackgrodundColor = 'rbg(255,255,255)';
  date: any;

  ngOnInit() {
    $('#keyboard').keyboard({
      autoAccept: true,
      accepted: (event, keyboard, el) => {
        if (keyboard.$preview.val().length < 2 || keyboard.$preview.val().length > 10) {
          this.wcsService.userId = '';
        } else {
          this.navService.sendLoginData(keyboard.$preview.val());
        }
      }
    });

    // keeps date on screen updated
    interval(1000).subscribe(() => {
      this.date = this.getCurrentDate();
    });

    this.navService.onUpdateLoginBox.subscribe(message => {
      this.loginId = message.data;
      this.loginBoxFontColor = message.textColor;
      this.loginBoxBackgrodundColor = message.backgroundColor;
    });
  }

  getCurrentDate() {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    const date = new Date().toLocaleString(window.navigator.language, options);
    return date;
  }

  onFocus() {
    const keyboard = $('#keyboard').getkeyboard();
    keyboard.reveal();
    $('.ui-keyboard-enter').hide();
  }

  onLogout() {
    this.navService.sendLoginData('Not Logged In');
  }

  buttonClicked() {
    alert();
  }

}
