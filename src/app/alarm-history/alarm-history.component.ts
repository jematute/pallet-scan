import { Component, OnInit } from '@angular/core';
import { AlarmHistoryService } from './alarm-history.service';
import { WcsService } from '../wcs.service';

@Component({
  selector: 'app-alarm-history',
  templateUrl: './alarm-history.component.html',
  styleUrls: ['./alarm-history.component.less']
})
export class AlarmHistoryComponent implements OnInit {

  constructor(private wcsService: WcsService) { 
    
  }

  ngOnInit() {
    this.wcsService.onAlarmGridUpdate.subscribe(resp => {
      this.data = resp;
    })
  }

  data = [];

  columnDefs = [
    {headerName: 'Unit',  field: 'unit.data', cellStyle: (param) => {
      return this.setCellStyle('unit', param);
    }},
    {headerName: 'Alarm', field: 'alarm.data', autoHeight: true, cellStyle: (param) => {
      return this.setCellStyle('alarm', param);
    }},
    {headerName: 'TimeStamp', field: 'timestamp.data', cellStyle: (param) => {
      return this.setCellStyle('timestamp', param);
    }},
  ];

  setCellStyle(columnName: string, param: any) {
    const background = param.data[columnName].backgroundColor;
    const color = param.data[columnName].textColor; 
    return {
      'background-color': background,
      'color': color,
      'padding': '1px',
      'white-space': 'normal'
    }
  }

}
