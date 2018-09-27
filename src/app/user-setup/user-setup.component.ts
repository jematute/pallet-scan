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

  ngOnInit() {
    this.wcsService.getScreenData().subscribe(data => {
      this.users = data;
    });
  }

}
