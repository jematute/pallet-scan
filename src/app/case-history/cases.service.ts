import { Injectable } from '@angular/core';
import { range, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  constructor() { }

  getCases(): Observable<any> {
    const cases = [];
    range(1, 1000).subscribe(n => {
      const caseRecord = { 
        barcode: '1234567890', 
        status: 'Good', 
        loadId: '12345', 
        palletStatus: 'good',
        palletId: '123456',
        user: 'jsmith',
        manualWrap: 'jsmith',
      };
      cases.push(caseRecord);
    });
    return of(cases);
  }


}
