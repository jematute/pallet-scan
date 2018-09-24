import { PalletInfoModule } from './pallet-info.module';

describe('PalletInfoModule', () => {
  let palletInfoModule: PalletInfoModule;

  beforeEach(() => {
    palletInfoModule = new PalletInfoModule();
  });

  it('should create an instance', () => {
    expect(palletInfoModule).toBeTruthy();
  });
});
