import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { CasesService } from '../case-history/cases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private caseService: CasesService) {
    this.caseService.getCases().subscribe(data => {
      this.data = data;
    });
   }

  ngOnInit() {
    
  }

  data = [];

  columnDefs = [
    {headerName: 'Case Barcode', field: 'barcode' },
    {headerName: 'Case Status', field: 'status' },
    {headerName: 'Load ID', field: 'loadId'}
  ];

}
