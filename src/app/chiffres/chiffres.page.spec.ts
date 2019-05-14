import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffresPage } from './chiffres.page';

describe('ChiffresPage', () => {
  let component: ChiffresPage;
  let fixture: ComponentFixture<ChiffresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiffresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiffresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
