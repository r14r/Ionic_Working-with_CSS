import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFileInputsPage } from './custom-file-inputs.page';

describe('CustomFileInputsPage', () => {
  let component: CustomFileInputsPage;
  let fixture: ComponentFixture<CustomFileInputsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFileInputsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFileInputsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
