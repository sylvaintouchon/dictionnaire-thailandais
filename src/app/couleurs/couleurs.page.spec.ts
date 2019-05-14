import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouleursPage } from './couleurs.page';

describe('CouleursPage', () => {
  let component: CouleursPage;
  let fixture: ComponentFixture<CouleursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouleursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouleursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
