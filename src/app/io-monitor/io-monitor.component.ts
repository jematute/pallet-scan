import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-io-monitor',
  templateUrl: './io-monitor.component.html',
  styleUrls: ['./io-monitor.component.less']
})
export class IoMonitorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  wrapperReady = true;
  turnTableRotating = true;
  turnTableHomeProx = true;
  eStopActive = false;
  rotateCommand = true;
  disableWrapping = true;
  wrapStart = true;
  redBeacon = true;
  greenBeacon = true;

}
