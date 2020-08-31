import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageResizeCropCanvasPage } from './image-resize-crop-canvas.page';

describe('ImageResizeCropCanvasPage', () => {
  let component: ImageResizeCropCanvasPage;
  let fixture: ComponentFixture<ImageResizeCropCanvasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageResizeCropCanvasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageResizeCropCanvasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
