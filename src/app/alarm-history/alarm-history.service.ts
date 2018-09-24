import { Injectable } from '@angular/core';
import { Observable, of, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlarmHistoryService {

  constructor() { }

  getData(): Observable<any> {
    const data = [];
    range(1, 500).subscribe(() => {
      const record = {
        unit: 'Scanner',
        alarm: 'Failed to Trigger',
        timeStamp: new Date().toLocaleString()
      }
      data.push(record);
    });
    return of(data);
  }
}
