import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-options',
  templateUrl: './case-options.component.html',
  styleUrls: ['./case-options.component.less']
})
export class CaseOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showGoodCases = true;
  showErrorCases = true;

}
