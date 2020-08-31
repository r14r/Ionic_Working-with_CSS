import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationCalendarPage } from './animation-calendar.page';

describe('AnimationCalendarPage', () => {
  let component: AnimationCalendarPage;
  let fixture: ComponentFixture<AnimationCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationCalendarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
