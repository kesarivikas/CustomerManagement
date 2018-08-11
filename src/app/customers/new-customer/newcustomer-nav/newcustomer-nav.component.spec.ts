import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomerNavComponent } from './newcustomer-nav.component';

describe('NewcustomerNavComponent', () => {
  let component: NewcustomerNavComponent;
  let fixture: ComponentFixture<NewcustomerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcustomerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
