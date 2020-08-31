import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleFragmentsPage } from './little-fragments.page';

describe('LittleFragmentsPage', () => {
  let component: LittleFragmentsPage;
  let fixture: ComponentFixture<LittleFragmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleFragmentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleFragmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
