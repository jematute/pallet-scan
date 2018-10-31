import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
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
  @Output() gridReady = new EventEmitter();
  showGoodCases = true;
  showErrorCases = false;

  gridApi: GridApi;

  ngOnInit() {  }

  onGridReady($event) {
    this.gridApi = $event.api;
    this.gridApi.sizeColumnsToFit();
    this.gridReady.emit($event.api);
  }

}
