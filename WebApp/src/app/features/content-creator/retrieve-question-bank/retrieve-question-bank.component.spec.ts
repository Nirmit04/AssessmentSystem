import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveQuestionBankComponent } from './retrieve-question-bank.component';

describe('RetrieveQuestionBankComponent', () => {
  let component: RetrieveQuestionBankComponent;
  let fixture: ComponentFixture<RetrieveQuestionBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveQuestionBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveQuestionBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
