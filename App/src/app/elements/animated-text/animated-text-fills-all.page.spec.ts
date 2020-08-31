import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTextFillsAllPage } from './animated-text-fills-all.page';

describe('AnimatedTextFillsAllPage', () => {
  let component: AnimatedTextFillsAllPage;
  let fixture: ComponentFixture<AnimatedTextFillsAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedTextFillsAllPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedTextFillsAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
