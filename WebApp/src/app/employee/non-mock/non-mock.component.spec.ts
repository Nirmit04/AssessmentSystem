import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMockComponent } from './non-mock.component';

describe('NonMockComponent', () => {
  let component: NonMockComponent;
  let fixture: ComponentFixture<NonMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
