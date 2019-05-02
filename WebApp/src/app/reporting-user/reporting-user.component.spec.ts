import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingUserComponent } from './reporting-user.component';

describe('ReportingUserComponent', () => {
  let component: ReportingUserComponent;
  let fixture: ComponentFixture<ReportingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
