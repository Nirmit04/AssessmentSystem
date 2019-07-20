import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByTagComponent } from './analytics-by-tag.component';

describe('AnalyticsByTagComponent', () => {
  let component: AnalyticsByTagComponent;
  let fixture: ComponentFixture<AnalyticsByTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsByTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
