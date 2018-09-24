import { CaseHistoryModule } from './case-history.module';

describe('CaseHistoryModule', () => {
  let caseHistoryModule: CaseHistoryModule;

  beforeEach(() => {
    caseHistoryModule = new CaseHistoryModule();
  });

  it('should create an instance', () => {
    expect(caseHistoryModule).toBeTruthy();
  });
});
