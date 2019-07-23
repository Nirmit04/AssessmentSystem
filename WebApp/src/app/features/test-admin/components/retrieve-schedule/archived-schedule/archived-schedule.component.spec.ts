import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedScheduleComponent } from './archived-schedule.component';

describe('ArchivedScheduleComponent', () => {
  let component: ArchivedScheduleComponent;
  let fixture: ComponentFixture<ArchivedScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
