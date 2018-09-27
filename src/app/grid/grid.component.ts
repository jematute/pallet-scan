import { Component, OnInit, Output, Input } from '@angular/core';
import { range } from 'rxjs';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})
export class GridComponent implements OnInit {

  constructor() { }

  @Input() data = [];
  @Input() columns = [];
  showGoodCases = true;
  showErrorCases = false;

  gridApi: GridApi;

  ngOnInit() {  }

  onGridReady($event) {
    this.gridApi = $event.api;
    this.gridApi.sizeColumnsToFit();
    console.log($event);
  }

}
