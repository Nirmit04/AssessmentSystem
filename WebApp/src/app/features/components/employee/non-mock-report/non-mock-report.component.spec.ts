import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMockReportComponent } from './non-mock-report.component';

describe('NonMockReportComponent', () => {
  let component: NonMockReportComponent;
  let fixture: ComponentFixture<NonMockReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMockReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
