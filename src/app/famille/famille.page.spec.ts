import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamillePage } from './famille.page';

describe('FamillePage', () => {
  let component: FamillePage;
  let fixture: ComponentFixture<FamillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamillePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
