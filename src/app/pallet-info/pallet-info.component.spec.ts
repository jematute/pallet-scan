import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletInfoComponent } from './pallet-info.component';

describe('PalletInfoComponent', () => {
  let component: PalletInfoComponent;
  let fixture: ComponentFixture<PalletInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalletInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
