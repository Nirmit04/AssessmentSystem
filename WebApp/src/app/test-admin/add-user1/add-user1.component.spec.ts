import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUser1Component } from './add-user1.component';

describe('AddUser1Component', () => {
  let component: AddUser1Component;
  let fixture: ComponentFixture<AddUser1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUser1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
