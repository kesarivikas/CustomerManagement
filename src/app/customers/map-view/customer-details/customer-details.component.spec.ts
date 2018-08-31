// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { inject } from '@angular/core/testing';
// import { CustomerDetailsComponent } from './customer-details.component';
// import { CustomersService } from '../../customers.service';
// import { Customers } from '../../customers';
// import { TableModule } from 'primeng/table';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { AgmCoreModule } from '@agm/core';

// fdescribe('CustomerDetailsComponent', () => {
//   let component: CustomerDetailsComponent;
// 	let fixture: ComponentFixture<CustomerDetailsComponent>;
// 	let customerService: CustomersService;
// 	const customerData: Customers[] = [
// 		{ 
// 			customerID: "1",
// 			firstName: "Ravi",
// 			lastName: "sawant",
// 			address: "Airoli",
// 			city: "Navi Mumbai",
// 			state: "Maharashtra",
// 			gender: "male",
// 			email: "ravi.sawant@gmail.com",
// 			zip: "400123",
// 			orders: "2",
// 			orderTotal: "$49.00",
// 			imageUrl: "assets/images/male.jpeg",
// 			lat: 43.139229,
// 			log: -79.484901
// 		},
// 		{
// 			customerID: "2",
// 			firstName: "Suman",
// 			lastName: "Rawat",
// 			address: "Thane",
// 			city: "Mumbai",
// 			state: "Maharashtra",
// 			gender: "female",
// 			email: "suman.rawat@gmail.com",
// 			zip: "41233",
// 			orders: "2",
// 			orderTotal: "$49.00",
// 			imageUrl: "assets/images/female.jpeg",
// 			lat: 19.1622,
// 			log: 73.0007
// 		}
// 		];

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
// 			imports: [ HttpClientModule,RouterTestingModule.withRoutes([]),
// 									TableModule, FormsModule, AgmCoreModule.forRoot({
// 										apiKey: ''
// 									})],
// 			declarations: [ CustomerDetailsComponent ],
// 			providers: [ CustomersService ]			
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
// 	  fixture = TestBed.createComponent(CustomerDetailsComponent);
// 		component = fixture.componentInstance;
// 		customerService = TestBed.get(CustomersService);
// 		fixture.detectChanges();
//   });

//   it('should create', inject([CustomersService], (customerService: CustomersService) => {
// 		component.firstName = "Ravi";
// 		component.ngOnInit();
// 		customerService.setCustomersList(customerData);
// 		expect(component).toBeTruthy();
//   }));
// });
