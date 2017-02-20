/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BldgresultComponent } from './bldgresult.component';

describe('BldgresultComponent', () => {
  let component: BldgresultComponent;
  let fixture: ComponentFixture<BldgresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BldgresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BldgresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
