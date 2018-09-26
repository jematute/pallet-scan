import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { interval } from 'rxjs';
import {SelectItem} from 'primeng/api';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { 
    this.user = this.logins[0];
    this.date = this.getCurrentDate();
    this.logins = [
      {label:'MSmith', value:{id:1, name: 'MSmith', code: 'MS'}},
      {label:'Test1', value:{id:2, name: 'Test1', code: 'RM'}},
      {label:'Test2', value:{id:3, name: 'Test2', code: 'LDN'}},
      {label:'Test3', value:{id:4, name: 'Test3', code: 'IST'}},
      {label:'Test4', value:{id:5, name: 'Test4', code: 'PRS'}}
  ];
  }
  text = "MSmith";
  user: any;
  results = [];
  date: any;
  logins = [];

  ngOnInit() {
    $('#keyboard').keyboard({
      autoAccept: true,
    });
    interval(1000).subscribe(() => {
      this.date = this.getCurrentDate();
    });
    
  }

  search(event) {
    this.results = this.logins.filter(i => {
      if (i.value.name.startsWith(event.query))
        return i;
    }).map(s => s.name);
  }

  getCurrentDate() {
    var options = { 
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
    var keyboard = $('#keyboard').getkeyboard();
    keyboard.insertText("");
    keyboard.reveal();
    $('.ui-keyboard-input').bind('keyboardChange', event => {
      this.user = keyboard.$preview.val();
    })
  }

  onBlur() {

  }


}
