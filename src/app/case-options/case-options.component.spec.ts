import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseOptionsComponent } from './case-options.component';

describe('CaseOptionsComponent', () => {
  let component: CaseOptionsComponent;
  let fixture: ComponentFixture<CaseOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
