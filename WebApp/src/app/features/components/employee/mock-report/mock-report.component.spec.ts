import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockReportComponent } from './mock-report.component';

describe('MockReportComponent', () => {
  let component: MockReportComponent;
  let fixture: ComponentFixture<MockReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
