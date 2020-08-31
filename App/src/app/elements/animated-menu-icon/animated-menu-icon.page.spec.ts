import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedMenuIconPage } from './animated-menu-icon.page';

describe('AnimatedMenuIconPage', () => {
  let component: AnimatedMenuIconPage;
  let fixture: ComponentFixture<AnimatedMenuIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedMenuIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedMenuIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
