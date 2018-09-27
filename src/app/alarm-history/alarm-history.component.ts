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
    this.wcsService.getScreenData().subscribe(data => {
      this.data = data;
    });
  }

  data = [];

  columnDefs = [
    {headerName: 'Unit', field: 'unit' },
    {headerName: 'Alarm', field: 'alarm' },
    {headerName: 'TimeStamp', field: 'timeStamp'},
  ];

}
