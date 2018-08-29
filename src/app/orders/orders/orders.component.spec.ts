import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { CustomersService } from '../../customers/customers.service';
import { Observable } from 'rxjs';
import { OrderTotal } from '../order-total';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports:[TableModule, HttpClientModule],
			declarations: [ OrdersComponent ],
			providers:[CustomersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
	});
	
	it('Should call seach method', () => {
		let searchData = [
			{
				"customerID": "1",
				"customerName": "Ravi",
				"lastName": "sawant",
				"orders":[
						{
							"productID": "111",
							"productName": "Basket",
							"date": "09/14/2014",
							"quantity": "1",
							"unitePrice": "$29",
							"total": "$29.00"
						},
						{
							"productID": "112",
							"productName": "pen",
							"date": "03/14/2014",
							"quantity": "1",
							"unitePrice": "$10",
							"total": "$20.00"
						}
				],
				"orderTotal": "$49.00"
			},
			{
				"customerID": "2",
				"customerName": "Suman",
				"lastName": "Rawat",
				"orders":[
						{
							"productID": "221",
							"productName": "Basket",
							"date": "09/14/2014",
							"quantity": "1",
							"unitePrice": "$29",
							"total": "$29.00"
						},
						{
							"productID": "222",
							"productName": "pen",
							"date": "03/14/2014",
							"quantity": "1",
							"unitePrice": "$10",
							"total": "$20.00"
						}
				],
				"orderTotal": "$49.00"
			},
			{
				"customerID": "3",
				"customerName": "Suma",
				"lastName": "shinde",
				"orders":[
						{
							"productID": "222",
							"productName": "pen",
							"date": "09/14/2014",
							"quantity": "2",
							"unitePrice": "$0.99",
							"total": "$19.80"
						},
						{
							"productID": "222",
							"productName": "Lego city",
							"date": "03/14/2014",
							"quantity": "1",
							"unitePrice": "$49.99",
							"total": "$49.99"
						}
				],
				"orderTotal": "$69.79"
			}]
		component.searchList = 	searchData;
		component.searchSuggestion('suma');
		//component.searchSuggestion('');
		//component.searchSuggestion('basket');
	});
});
