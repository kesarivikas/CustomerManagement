import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomerNavComponent } from './newcustomer-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from '../../customers.service';

describe('NewcustomerNavComponent', () => {
  let component: NewcustomerNavComponent;
  let fixture: ComponentFixture<NewcustomerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientModule],
			declarations: [ NewcustomerNavComponent ],
			providers: [CustomersService]
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
