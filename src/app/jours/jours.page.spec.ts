import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoursPage } from './jours.page';

describe('JoursPage', () => {
  let component: JoursPage;
  let fixture: ComponentFixture<JoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
