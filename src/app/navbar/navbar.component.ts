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
    this.user = this.logins[0];
    this.date = this.getCurrentDate();
    this.logins = [
      {label: 'MSmith', value: {id: 1, name: 'MSmith', code: 'MS'}},
      {label: 'Test1', value: {id: 2, name: 'Test1', code: 'RM'}},
      {label: 'Test2', value: {id: 3, name: 'Test2', code: 'LDN'}},
      {label: 'Test3', value: {id: 4, name: 'Test3', code: 'IST'}},
      {label: 'Test4', value: {id: 5, name: 'Test4', code: 'PRS'}}
    ];
  }
  text = 'MSmith';
  user: any;
  results = [];
  date: any;
  logins = [];

  ngOnInit() {
    $('#keyboard').keyboard({
      autoAccept: true,
      accepted: (event, keyboard, el) => {
        if (keyboard.$preview.val().length < 2 || keyboard.$preview.val().length > 10) {
          this.wcsService.userId = '';      
        } else {
          this.navService.sendLoginData(this.wcsService.userId);
        }
      }
    });
    interval(1000).subscribe(() => {
      this.date = this.getCurrentDate();
    });

    this.navService.onEvent.subscribe(resp => {
      this.text = resp;
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
  }

  onBlur() {

  }


}
