import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitationPage } from './habitation.page';

describe('HabitationPage', () => {
  let component: HabitationPage;
  let fixture: ComponentFixture<HabitationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
