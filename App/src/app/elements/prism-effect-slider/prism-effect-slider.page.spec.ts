import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismEffectSliderPage } from './prism-effect-slider.page';

describe('PrismEffectSliderPage', () => {
  let component: PrismEffectSliderPage;
  let fixture: ComponentFixture<PrismEffectSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismEffectSliderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismEffectSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
