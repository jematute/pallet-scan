import { TestBed, async, inject } from '@angular/core/testing';

import { ChangeGuard } from './change.guard';

describe('ChangeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeGuard]
    });
  });

  it('should ...', inject([ChangeGuard], (guard: ChangeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
