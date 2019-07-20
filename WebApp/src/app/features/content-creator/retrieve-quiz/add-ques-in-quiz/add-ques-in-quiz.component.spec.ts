import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuesInQuizComponent } from './add-ques-in-quiz.component';

describe('AddQuesInQuizComponent', () => {
  let component: AddQuesInQuizComponent;
  let fixture: ComponentFixture<AddQuesInQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuesInQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuesInQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
