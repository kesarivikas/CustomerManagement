import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewComponent } from './card-view.component';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { Observable } from 'rxjs';
import { Order } from '../../orders/order-total';
import { HttpClientModule } from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

describe('CardViewComponent', () => {
  let component: CardViewComponent;
	let fixture: ComponentFixture<CardViewComponent>;
	let customerService: CustomersService;
	const customerData: Customers[] = [
		{ 
			customerID: "1",
			firstName: "Ravi",
			lastName: "sawant",
			address: "Airoli",
			city: "Navi Mumbai",
			state: "Maharashtra",
			gender: "male",
			email: "ravi.sawant@gmail.com",
			zip: "400123",
			orders: "2",
			orderTotal: "$49.00",
			imageUrl: "assets/images/male.jpeg",
			lat: 43.139229,
			log: -79.484901
		},
		{
			customerID: "2",
			firstName: "Suman",
			lastName: "Rawat",
			address: "Thane",
			city: "Mumbai",
			state: "Maharashtra",
			gender: "female",
			email: "suman.rawat@gmail.com",
			zip: "41233",
			orders: "2",
			orderTotal: "$49.00",
			imageUrl: "assets/images/female.jpeg",
			lat: 19.1622,
			log: 73.0007
		}
		];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [	HttpClientModule, AutoCompleteModule, FormsModule, 
									NgxPaginationModule, RouterTestingModule.withRoutes([]),
									DialogModule, TableModule],
			declarations: [CardViewComponent],
			providers: [CustomersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewComponent);
		component = fixture.componentInstance;
		customerService = TestBed.get(CustomersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
	});
	
	it('Should call popup model', () => {
		customerService.setCustomersList(customerData);
    component.popupModel('Ravi');
	});

	it('Should call seach method', () => {
		let event = {
			query:"Ravi"
			//query:"Ravi1"
			//query:""
		}
		customerService.setCustomersList(customerData);
    component.search(event);
	});
	
});
