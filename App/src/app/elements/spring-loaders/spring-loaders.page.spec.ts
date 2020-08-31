import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringLoadersPage } from './spring-loaders.page';

describe('SpringLoadersPage', () => {
  let component: SpringLoadersPage;
  let fixture: ComponentFixture<SpringLoadersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringLoadersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringLoadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
