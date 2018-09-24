import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoMonitorComponent } from './io-monitor.component';

describe('IoMonitorComponent', () => {
  let component: IoMonitorComponent;
  let fixture: ComponentFixture<IoMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
