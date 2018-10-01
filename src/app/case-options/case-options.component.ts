import { Component, OnInit } from '@angular/core';
import { WcsService } from '../wcs.service';

@Component({
  selector: 'app-case-options',
  templateUrl: './case-options.component.html',
  styleUrls: ['./case-options.component.less']
})
export class CaseOptionsComponent implements OnInit {

  constructor(private wcsService: WcsService) { }

  ngOnInit() {
  }

  showGoodCases = true;
  showErrorCases = true;

  onShowGoodCasesClicked($event) {
    this.wcsService.toggleGoodCases($event).subscribe();
  }

  onShowErrorCasesClicked($event) {
    this.wcsService.toggleErrorCases($event).subscribe();
  }

}
