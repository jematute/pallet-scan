import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { WcsService } from '../wcs.service';

@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.less']
})
export class UserSetupComponent implements OnInit {

  constructor(private wcsService: WcsService) { }

  users: User[] = [];
  usersCache = [];
  showPasswordDialog = false;
  password = '';
  applyEnabled = false;

  ngOnInit() {
    this.wcsService.onUserDataUpdate.subscribe(users => {
      this.usersCache = users;
      this.users = users;
      this.users.forEach(user => {
        user.adminChanged = false;
        user.allowWrapEnableChanged = false;
      });
      
    });
  }

  applyClicked() {
    this.showPasswordDialog = true;
    this.password = '';
  }

  passwordSubmit() {
    this.wcsService.userUpdate({ password: this.password, users: this.users }).subscribe(() => {
      this.applyEnabled = false;
    });
    this.showPasswordDialog = false;
  }

  cancelClicked() {
    this.wcsService.getUserData().subscribe();
  }

  cancelPasswordDialog() {
    this.showPasswordDialog = false;
  }

  userAllowWrapEnableChanged(value, user) {
    this.applyEnabled = true;
    user.allowWrapEnableChanged = true;
  }

  userAdminChanged(value, user) {
    this.applyEnabled = true;
    user.adminChanged = true;
  }
}
