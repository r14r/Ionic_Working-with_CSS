import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAviatorPage } from './the-aviator.page';

describe('TheAviatorPage', () => {
  let component: TheAviatorPage;
  let fixture: ComponentFixture<TheAviatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheAviatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheAviatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
