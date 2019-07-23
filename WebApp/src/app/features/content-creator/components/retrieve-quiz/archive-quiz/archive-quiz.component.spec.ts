import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveQuizComponent } from './archive-quiz.component';

describe('ArchiveQuizComponent', () => {
  let component: ArchiveQuizComponent;
  let fixture: ComponentFixture<ArchiveQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
