import { Component, OnInit } from '@angular/core';
import { CasesService } from './cases.service';

@Component({
  selector: 'app-case-history',
  templateUrl: './case-history.component.html',
  styleUrls: ['./case-history.component.less']
})
export class CaseHistoryComponent implements OnInit {

  constructor(private casesService: CasesService) {

    this.casesService.getCases().subscribe(data => {
      this.data = data;
    });
   }

  ngOnInit() {
    
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
