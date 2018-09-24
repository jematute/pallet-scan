import { TestBed } from '@angular/core/testing';

import { AlarmHistoryService } from './alarm-history.service';

describe('AlarmHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlarmHistoryService = TestBed.get(AlarmHistoryService);
    expect(service).toBeTruthy();
  });
});
