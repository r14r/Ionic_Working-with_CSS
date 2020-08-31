import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationGridLayoutSlideshowPage } from './animation-grid-layout-slideshow.page';

describe('AnimationGridLayoutSlideshowPage', () => {
  let component: AnimationGridLayoutSlideshowPage;
  let fixture: ComponentFixture<AnimationGridLayoutSlideshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationGridLayoutSlideshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationGridLayoutSlideshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
