import { AlarmHistoryModule } from './alarm-history.module';

describe('AlarmHistoryModule', () => {
  let alarmHistoryModule: AlarmHistoryModule;

  beforeEach(() => {
    alarmHistoryModule = new AlarmHistoryModule();
  });

  it('should create an instance', () => {
    expect(alarmHistoryModule).toBeTruthy();
  });
});
