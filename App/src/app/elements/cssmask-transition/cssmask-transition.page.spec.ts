import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSMaskTransitionPage } from './cssmask-transition.page';

describe('CSSMaskTransitionPage', () => {
  let component: CSSMaskTransitionPage;
  let fixture: ComponentFixture<CSSMaskTransitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSSMaskTransitionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSMaskTransitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
