import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NourriturePage } from './nourriture.page';

describe('NourriturePage', () => {
  let component: NourriturePage;
  let fixture: ComponentFixture<NourriturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NourriturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NourriturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
