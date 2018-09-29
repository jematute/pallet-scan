import { TestBed } from '@angular/core/testing';

import { ServerMessagesService } from './server-messages.service';

describe('ServerMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerMessagesService = TestBed.get(ServerMessagesService);
    expect(service).toBeTruthy();
  });
});
