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
    this.wcsService.getScreenData().subscribe(data => {
      this.data = data as Case[];
    });
  }

  data: Case[];

  columnDefs = [
    {headerName: 'Case Barcode', field: 'barcode' },
    {headerName: 'Case Status', field: 'status' },
    {headerName: 'Load ID', field: 'loadId'}
  ];

}
