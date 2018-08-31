import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomersService } from '../../customers.service';
import { Order } from '../../../orders/order-total';
import { TableModule } from 'primeng/table';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('CustomerOrdersComponent', () => {
  let component: CustomerOrdersComponent;
  let fixture: ComponentFixture<CustomerOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [TableModule, RouterTestingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
			declarations: [ CustomerOrdersComponent ],
			providers: [ CustomersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
		component.custName = "Ravi";
    expect(component).toBeTruthy();
  });
});
