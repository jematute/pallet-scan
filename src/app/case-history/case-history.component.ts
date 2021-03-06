import { Component, OnInit } from '@angular/core';
import { CasesService } from './cases.service';
import { WcsService } from '../wcs.service';

@Component({
  selector: 'app-case-history',
  templateUrl: './case-history.component.html',
  styleUrls: ['./case-history.component.less']
})
export class CaseHistoryComponent implements OnInit {

  constructor(private wcsService: WcsService) {
   }

  ngOnInit() {
    this.wcsService.onDataUpdate.subscribe(resp => {
      this.data = resp;
    });
  }

  data = [];
  columnDefs = [
    {headerName: 'Case Barcode', width: 280, margin: 1, field: 'barcode.data',cellStyle: (param) => {
      return this.setCellStyle('barcode', param);
    }},
    {headerName: 'Case Status', width: 200, field: 'status.data', autoHeight: true, cellStyle: (param) => {
      return this.setCellStyle('status', param);
    }},
    {headerName: 'Load ID', width: 175, field: 'loadId.data', cellStyle: (param) => {
      return this.setCellStyle('loadId', param);
    }},
    {headerName: 'Pallet Status', field: 'palletStatus.data', cellStyle: (param) => {
      return this.setCellStyle('palletStatus', param);
    }},
    {headerName: 'Pallet ID', field: 'palletId.data', cellStyle: (param) => {
      return this.setCellStyle('palletId', param);
    }},
    {headerName: 'User', field: 'user.data', cellStyle: (param) => {
      return this.setCellStyle('user', param);
    }},
    {headerName: 'Manual Wrap', field: 'manualWrap.data', cellStyle: (param) => {
      return this.setCellStyle('manualWrap', param);
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
