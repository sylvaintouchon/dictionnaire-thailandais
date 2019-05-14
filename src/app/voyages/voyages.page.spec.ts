import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesPage } from './voyages.page';

describe('VoyagesPage', () => {
  let component: VoyagesPage;
  let fixture: ComponentFixture<VoyagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
