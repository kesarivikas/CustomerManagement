import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewComponent } from './search-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TableModule } from 'primeng/table';

describe('SearchViewComponent', () => {
  let component: SearchViewComponent;
	let fixture: ComponentFixture<SearchViewComponent>;
	let customersService: CustomersService;
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
			imports: [ RouterTestingModule, TableModule, HttpClientModule, FormsModule, ReactiveFormsModule, FilterPipeModule],
			declarations: [ SearchViewComponent ],
			providers: [ CustomersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewComponent);
		component = fixture.componentInstance;
		customersService = TestBed.get(CustomersService);
    fixture.detectChanges();
  });

  it('should create', () => {
		//customersService.setCustomersList(customerData);
    expect(component).toBeTruthy();
	});
	
	it('should call delete method', () => {
		customersService.setCustomersList(customerData);
    component.deleteCustomer(3);
  });
});
