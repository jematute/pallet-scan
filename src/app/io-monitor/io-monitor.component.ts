import { Component, OnInit } from '@angular/core';
import { WcsService } from '../wcs.service';
import { IOData } from '../classes/io-data';

@Component({
  selector: 'app-io-monitor',
  templateUrl: './io-monitor.component.html',
  styleUrls: ['./io-monitor.component.less']
})
export class IoMonitorComponent implements OnInit {

  constructor(private wcsService: WcsService) { }
  data: IOData;

  ngOnInit() {
    this.wcsService.getScreenData().subscribe(data => {
      this.data = data;
    });
  }
}
