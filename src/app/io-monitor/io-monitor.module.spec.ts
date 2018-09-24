import { IoMonitorModule } from './io-monitor.module';

describe('IoMonitorModule', () => {
  let ioMonitorModule: IoMonitorModule;

  beforeEach(() => {
    ioMonitorModule = new IoMonitorModule();
  });

  it('should create an instance', () => {
    expect(ioMonitorModule).toBeTruthy();
  });
});
