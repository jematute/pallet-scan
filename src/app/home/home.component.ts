import { Component, OnInit } from '@angular/core';
import { WcsService } from '../wcs.service';
import { Case } from '../classes/case';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private wcsService: WcsService) {

  }

  ngOnInit() {
    this.wcsService.onDataUpdate.subscribe(data => {
      this.data = data as Case[];
    })
  }

  data: Case[];

  columnDefs = [
    {headerName: 'Case Barcode', field: 'barcode.data', width: 150, cellStyle: (param) => {
      return this.setCellStyle('barcode', param);
    }},
    {headerName: 'Case Status', field: 'status.data', width: 120, cellStyle: (param) => {
      return this.setCellStyle('status', param);
    }},
    {headerName: 'Load ID', field: 'loadId.data', width: 80, cellStyle: (param) => {
      return this.setCellStyle('loadId', param);
    }}
  ];

  setCellStyle(columnName: string, param: any) {
    const background = param.data[columnName].backgroundColor;
    const color = param.data[columnName].textColor; 
    return {
      'background-color': background,
      'color': color
    }
  }



}
