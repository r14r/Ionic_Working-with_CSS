import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGLoaderGSAPPage } from './svgloader-gsap.page';

describe('SVGLoaderGSAPPage', () => {
  let component: SVGLoaderGSAPPage;
  let fixture: ComponentFixture<SVGLoaderGSAPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SVGLoaderGSAPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SVGLoaderGSAPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
