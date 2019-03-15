import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveScheduleComponent } from './retrieve-schedule.component';

describe('RetrieveScheduleComponent', () => {
  let component: RetrieveScheduleComponent;
  let fixture: ComponentFixture<RetrieveScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
