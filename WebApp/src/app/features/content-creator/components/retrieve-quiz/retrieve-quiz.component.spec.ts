import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveQuizComponent } from './retrieve-quiz.component';

describe('CreateQuizComponent', () => {
  let component: RetrieveQuizComponent;
  let fixture: ComponentFixture<RetrieveQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
