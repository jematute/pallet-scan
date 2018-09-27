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
    this.wcsService.getScreenData().subscribe(data => {
      this.data = data;
    });
  }

  data = [];
  columnDefs = [
    {headerName: 'Case Barcode', field: 'barcode' },
    {headerName: 'Case Status', field: 'status' },
    {headerName: 'Load ID', field: 'loadId'},
    {headerName: 'Pallet Status', field: 'palletStatus' },
    {headerName: 'Pallet ID', field: 'palletId'},
    {headerName: 'User', field: 'user'},
    {headerName: 'Manual Wrap', field: 'manualWrap'},
  ];

}
