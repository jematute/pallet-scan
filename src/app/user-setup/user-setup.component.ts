import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.less']
})
export class UserSetupComponent implements OnInit {

  constructor() { }

  users: User[] = [];

  ngOnInit() {
    this.users.push({ user: "JSmith", allowWrapEnable: true, admin: true });
    this.users.push({ user: "MSmith", allowWrapEnable: false, admin: false });
    this.users.push({ user: "LSmith", allowWrapEnable: true, admin: false });
    this.users.push({ user: "RSmith", allowWrapEnable: false, admin: false });
    this.users.push({ user: "SSmith", allowWrapEnable: true, admin: false });
  }

}
