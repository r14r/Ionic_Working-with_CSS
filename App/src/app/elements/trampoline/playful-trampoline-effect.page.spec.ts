import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayfulTrampolineEffectPage } from './playful-trampoline-effect.page';

describe('PlayfulTrampolineEffectPage', () => {
  let component: PlayfulTrampolineEffectPage;
  let fixture: ComponentFixture<PlayfulTrampolineEffectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayfulTrampolineEffectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayfulTrampolineEffectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
