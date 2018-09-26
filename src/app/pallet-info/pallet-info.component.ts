import { Component, OnInit } from '@angular/core';
import { WcsService } from '../wcs.service';

declare var $;
@Component({
  selector: 'app-pallet-info',
  templateUrl: './pallet-info.component.html',
  styleUrls: ['./pallet-info.component.less']
})
export class PalletInfoComponent implements OnInit {

  status = 'Rotating';
  system = 'Ready';
  palletId = '12345';
  palletStatus = 'Pallet OK';
  wrapEnable = 'Automatic';
  wrapEnableKeyboard: any;
  constructor(public wcsService: WcsService) { }

  ngOnInit() {
    $('#keyboard-wrapenable').keyboard({
      autoAccept: true,
      accepted: (event, keyboard, ele) => {
        const val = keyboard.$preview.val();
        if (val.length > 1 && val.length < 11 && this.checkUser(keyboard.$preview.val())) {
          this.wrapEnable = 'Override';
        } else {
          this.wrapEnable = 'Automatic';
        }
      }
    });
  }

  start() {
    this.wcsService.startPalletScan().subscribe();
  }

  stop() {
    this.wcsService.stopPalletScan().subscribe();
  }

  onWrapEnabledFocus() {
    this.wrapEnableKeyboard = $('#keyboard-wrapenable').getkeyboard();
    this.wrapEnableKeyboard.reveal();
  }

  // check user in the user table
  checkUser(user: string) {
    return user.toLocaleLowerCase() === 'juan';
  }

}
