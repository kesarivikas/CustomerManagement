import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerComponent } from './edit-customer.component';
import { TableModule } from 'primeng/table';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from '../../customers.service';
import { Customers } from '../../customers';


describe('EditCustomerComponent', () => {
  let component: EditCustomerComponent;
	let fixture: ComponentFixture<EditCustomerComponent>;
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
			imports: [ TableModule, RouterTestingModule, ReactiveFormsModule, FormsModule, HttpClientModule ],
			declarations: [ EditCustomerComponent ],
			providers: [ CustomersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerComponent);
		component = fixture.componentInstance;
		customersService = TestBed.get(CustomersService);

    fixture.detectChanges();
  });

  it('should create', () => {
		component.firstName = "Ravi";
    expect(component).toBeTruthy();
	});
	
	it('should create update customer method', () => {
		//customersService.setCustomersList(customerData);
		//component.firstName = "Ravi";
		component.editCustomerProfile.controls['firstName'].setValue("Ravi");
		component.updateCustomer();
    expect(component).toBeTruthy();
	});

	it('should call delete method', () => {
		customersService.setCustomersList(customerData);
		//component.firstName = "Ravi";
		component.editCustomerProfile.controls['firstName'].setValue("Ravi");
		component.deleteCustomer();
    expect(component).toBeTruthy();
	});
	
});
