import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishComponent } from './finish.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from '../../../customers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Customers } from '../../../customers';

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




describe('FinishComponent', () => {
  let component: FinishComponent;
	let fixture: ComponentFixture<FinishComponent>;
	let customerService: CustomersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
			declarations: [ FinishComponent ],
			providers:[CustomersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishComponent);
		component = fixture.componentInstance;
		customerService = TestBed.get(CustomersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
	});
	
	it('should call submit method', () => {
		customerService.setCustomersList(customerData);
    component.submit();
	});
	
	it('should call previous method', () => {
		//customerService.setCustomersList(customerData);
    component.previous();
	});
	
	it('should call cancel method', () => {
    component.cancel();
  });
});
