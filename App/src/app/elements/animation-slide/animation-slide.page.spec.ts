import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSlidePage } from './animation-slide.page';

describe('AnimationSlidePage', () => {
  let component: AnimationSlidePage;
  let fixture: ComponentFixture<AnimationSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationSlidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
