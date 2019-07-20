import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByUserComponent } from './analytics-by-user.component';

describe('AnalyticsByUserComponent', () => {
  let component: AnalyticsByUserComponent;
  let fixture: ComponentFixture<AnalyticsByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
