import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRevealEffectsPage } from './page-reveal-effects.page';

describe('PageRevealEffectsPage', () => {
  let component: PageRevealEffectsPage;
  let fixture: ComponentFixture<PageRevealEffectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRevealEffectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRevealEffectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
