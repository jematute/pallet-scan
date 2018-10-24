import { Component, OnInit } from '@angular/core';
import { WcsService } from '../wcs.service';

declare var $;
@Component({
  selector: 'app-pallet-info',
  templateUrl: './pallet-info.component.html',
  styleUrls: ['./pallet-info.component.less']
})
export class PalletInfoComponent implements OnInit {

  // system status
  system = 'Ready';
  systemTextColor: 'rgb(0,0,0)';
  systemBackgroundColor: 'rgb(255,255,255)';

  // pallet scan
  palletScan = 'Rotating';
  palletScanTextColor = 'rgb(0,0,0)';
  palletScanBackgroundColor = 'rgb(255,255,255)';

  // pallet id
  palletId = '12345';
  palletIdTextColor = 'rgb(0,0,0)';
  palletIdBackgroundColor = 'rgb(255,255,255)';

  // pallet status
  palletStatus = 'Pallet OK';
  palletStatusTextColor = 'rgb(0,0,0)';
  palletStatusBackgroundColor = 'rgb(255,255,255)';

  // wrap enable
  wrapEnable = 'Automatic';
  wrapEnableTextColor = 'rgb(0,0,0)';
  wrapEnableBackgroundColor = 'rgb(255,255,255';

  // start button
  startButton = 'Start Scan';
  startButtonTextColor = 'rgb(0,0,0)';
  startButtonBackgroundColor = 'rgb(0,255,0)';
  startButtonBorderColor = 'rgb(230,230,230)';


  //stop button
  stopButton = 'Stop Scan';
  stopButtonTextColor = 'rgb(0,0,0)';
  stopButtonBackgroundColor = 'rgb(255,0,0)';
  stopButtonBorderColor = 'rgb(230,230,230)';


  wrapEnableKeyboard: any;

  alarmData = [];
  columnDefs = [
    {headerName: 'Unit', field: 'unit.data', cellStyle: (param) => {
      return this.setCellStyle('unit', param);
    }},
    {headerName: 'Alarm', field: 'alarm.data', cellStyle: (param) => {
      return this.setCellStyle('alarm', param);
    }},
    {headerName: 'TimeStamp', field: 'timestamp.data', cellStyle: (param) => {
      return this.setCellStyle('timestamp', param);
    }},
  ];
  constructor(public wcsService: WcsService) { }

  ngOnInit() {
    $('#keyboard-wrapenable').keyboard({
      autoAccept: true,
      accepted: (event, keyboard, ele) => {
        const val = keyboard.$preview.val();
        if (val.length > 1 && val.length < 11) {
          this.wcsService.wrapEnable(keyboard.$preview.val()).subscribe();
        }
      }
    });
    this.wcsService.onPalletIdUpdate.subscribe(data => this.updatePalledId(data));
    this.wcsService.onPalletScanUpdate.subscribe(data => this.updatePalletScan(data));
    this.wcsService.onPalletStatusUpdate.subscribe(data => this.updatePalletStatus(data));
    this.wcsService.onWrapEnableUpdate.subscribe(data => this.udateWrapEnable(data));
    this.wcsService.onStartButtonUpdate.subscribe(data => this.udateStartButton(data));
    this.wcsService.onStopButtonUpdate.subscribe(data => this.udateStopButton(data));
    this.wcsService.onSystemStatusUpdate.subscribe(data => this.udateSystemStatus(data));
    this.wcsService.onAlarmGridUpdate.subscribe(data => {
      this.alarmData = data;
    });
  }

  start() {
    this.wcsService.startPalletScan().subscribe();
  }

  stop() {
    this.wcsService.stopPalletScan().subscribe();
  }

  onStartButtonUpdate() {
    
  }

  onWrapEnabledFocus() {
    this.wrapEnableKeyboard = $('#keyboard-wrapenable').getkeyboard();
    this.wrapEnableKeyboard.reveal();
  }

  updatePalletStatus(data: any) {
    this.palletStatusBackgroundColor = data.backgroundColor;
    this.palletStatusTextColor = data.textColor;
    this.palletStatus = data.data;
  }

  updatePalledId(data: any) {
    this.palletIdBackgroundColor = data.backgroundColor;
    this.palletIdTextColor = data.textColor;
    this.palletId = data.data;
  }

  updatePalletScan(data: any) {
    this.palletScanBackgroundColor = data.backgroundColor;
    this.palletScanTextColor = data.textColor;
    this.palletScan = data.data;
  }

  udateWrapEnable(data: any) {
    this.wrapEnable = data.data;
    this.wrapEnableTextColor = data.textColor;
    this.wrapEnableBackgroundColor = data.backgroundColor;
  }

  udateSystemStatus(data: any) {
    this.system = data.data;
    this.systemTextColor = data.textColor;
    this.systemBackgroundColor = data.backgroundColor;
  }

  udateStartButton(data: any) {
    this.startButton = data.data;
    this.startButtonTextColor = data.textColor;
    this.startButtonBackgroundColor = data.backgroundColor;
    this.startButtonBorderColor = data.borderColor;
  }

  udateStopButton(data: any) {
    this.stopButton = data.data;
    this.stopButtonTextColor = data.textColor;
    this.stopButtonBackgroundColor = data.backgroundColor;
    this.stopButtonBorderColor = data.borderColor;
  }

  setCellStyle(columnName: string, param: any) {
    const background = param.data[columnName].backgroundColor;
    const color = param.data[columnName].textColor; 
    return {
      'background-color': background,
      'color': color,
      'padding': '1px'
    }
  }


}
