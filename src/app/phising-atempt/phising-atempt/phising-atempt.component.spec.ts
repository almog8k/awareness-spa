/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhisingAtemptComponent } from './phising-atempt.component';

describe('PhisingAtemptComponent', () => {
  let component: PhisingAtemptComponent;
  let fixture: ComponentFixture<PhisingAtemptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhisingAtemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhisingAtemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
