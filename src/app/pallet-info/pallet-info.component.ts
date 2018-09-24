import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pallet-info',
  templateUrl: './pallet-info.component.html',
  styleUrls: ['./pallet-info.component.less']
})
export class PalletInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status = "Rotating";
  system = "Ready";

  palletId = "12345";
  palletStatus = "Pallet OK";
  wrapEnable = "Automatic";

  start() {
    alert("Started");
  }

  stop() {
    alert("Stopped");
  }

}
