import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatDistortionEffectPage } from './heat-distortion-effect.page';

describe('HeatDistortionEffectPage', () => {
  let component: HeatDistortionEffectPage;
  let fixture: ComponentFixture<HeatDistortionEffectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatDistortionEffectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatDistortionEffectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
