import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSProgressPage } from './cssprogress.page';

describe('CSSProgressPage', () => {
  let component: CSSProgressPage;
  let fixture: ComponentFixture<CSSProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSSProgressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
