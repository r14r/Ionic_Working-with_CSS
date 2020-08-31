import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoOpeningAnimationPage } from './video-opening-animation.page';

describe('VideoOpeningAnimationPage', () => {
  let component: VideoOpeningAnimationPage;
  let fixture: ComponentFixture<VideoOpeningAnimationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoOpeningAnimationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoOpeningAnimationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
