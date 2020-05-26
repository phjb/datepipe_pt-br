/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatepipeComponent } from './datepipe.component';

describe('DatepipeComponent', () => {
  let component: DatepipeComponent;
  let fixture: ComponentFixture<DatepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
