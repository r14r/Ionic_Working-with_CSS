import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingHeaderLayoutPage } from './sliding-header-layout.page';

describe('SlidingHeaderLayoutPage', () => {
  let component: SlidingHeaderLayoutPage;
  let fixture: ComponentFixture<SlidingHeaderLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingHeaderLayoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingHeaderLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
