import { Component, OnInit } from '@angular/core';
import { AlarmHistoryService } from './alarm-history.service';

@Component({
  selector: 'app-alarm-history',
  templateUrl: './alarm-history.component.html',
  styleUrls: ['./alarm-history.component.less']
})
export class AlarmHistoryComponent implements OnInit {

  constructor(private alarmService: AlarmHistoryService) { }

  ngOnInit() {
    this.alarmService.getData().subscribe(data => {
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
