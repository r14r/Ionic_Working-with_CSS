import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationGridLoadingPage } from './animation-grid-loading.page';

describe('AnimationGridLoadingPage', () => {
  let component: AnimationGridLoadingPage;
  let fixture: ComponentFixture<AnimationGridLoadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationGridLoadingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationGridLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
