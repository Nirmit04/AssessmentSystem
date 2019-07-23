import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByQuizComponent } from './analytics-by-quiz.component';

describe('AnalyticsByQuizComponent', () => {
  let component: AnalyticsByQuizComponent;
  let fixture: ComponentFixture<AnalyticsByQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsByQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsByQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
