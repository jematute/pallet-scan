import { TestBed } from '@angular/core/testing';

import { WcsService } from './wcs.service';

describe('WcsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WcsService = TestBed.get(WcsService);
    expect(service).toBeTruthy();
  });
});
