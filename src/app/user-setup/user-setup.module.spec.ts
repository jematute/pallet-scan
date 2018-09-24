import { UserSetupModule } from './user-setup.module';

describe('UserSetupModule', () => {
  let userSetupModule: UserSetupModule;

  beforeEach(() => {
    userSetupModule = new UserSetupModule();
  });

  it('should create an instance', () => {
    expect(userSetupModule).toBeTruthy();
  });
});
