import { TestBed, inject } from '@angular/core/testing';
import { HttpClient} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CustomersService } from './customers.service';
import { Customers } from './customers';
import { OrderTotal } from '../orders/order-total';
import { CardViewComponent } from './card-view/card-view.component';



describe('CustomersService', () => {
	let customerService: CustomersService;
	let httpMock: HttpTestingController;
	let cardComponent: CardViewComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
      providers: [CustomersService, HttpClient]
		});
		
		customerService = TestBed.get(CustomersService);
		httpMock = TestBed.get(HttpTestingController); 
		// cardComponent = TestBed.get(CardViewComponent);
	});
	
	afterEach(() => {
		httpMock.verify();
	});

  it('Customer service should be created', inject([CustomersService], (customerService: CustomersService) => {
    expect(customerService).toBeTruthy();
	}));
	
	it('It should give customer data', () => {
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

		customerService.getCustomers().subscribe(loginData => {
			expect(loginData.length).toBe(2);
		});
		const reqObj = httpMock.expectOne(`${customerService.customersUrl}`);
		expect(reqObj.request.method).toBe('GET');
		reqObj.flush(customerData);
	});

	// it('It should give orders data', () => {
	// 	const orderData1: Customers[] = [
	// 	{ 
	// 		customerID: "1",
	// 		firstName: "Ravi",
	// 		lastName: "sawant",
	// 		address: "Airoli",
	// 		city: "Navi Mumbai",
	// 		state: "Maharashtra",
	// 		gender: "male",
	// 		email: "ravi.sawant@gmail.com",
	// 		zip: "400123",
	// 		orders: "2",
	// 		orderTotal: "$49.00",
	// 		imageUrl: "assets/images/male.jpeg",
	// 		lat: 43.139229,
	// 		log: -79.484901
	// 	},
	// 	{
	// 		customerID: "2",
	// 		firstName: "Suman",
	// 		lastName: "Rawat",
	// 		address: "Thane",
	// 		city: "Mumbai",
	// 		state: "Maharashtra",
	// 		gender: "female",
	// 		email: "suman.rawat@gmail.com",
	// 		zip: "41233",
	// 		orders: "2",
	// 		orderTotal: "$49.00",
	// 		imageUrl: "assets/images/female.jpeg",
	// 		lat: 19.1622,
	// 		log: 73.0007
	// 	}
	// 	];

		
	// });
	
	// it('Should call the get customerList', () => {
	// 	expect(customerService.getCustomersList().toBeGreaterThanOrEqual(1));
		
	// })
	// it('Should call the get customerList', () => {
	// 	spyOn(customerService, 'getCustomersList').and.returnValue(Observable.of(requestList));
	// });
	// it('should get the request List', () => {
	// 	const pageNo = 1, pagesize = 10;
	// 	spyOn(requestListSrv, 'getRequestList').and.returnValue(Observable.of(requestList));
	// 	component.getRequestList();
	// 	expect(requestListSrv.getRequestList).toHaveBeenCalledTimes(1);
	// 	expect(component.requestList).not.toBeNull();
	// 	expect(component.totalRecords).toBeGreaterThanOrEqual(2);
	// });

	it('Should call set and get method of customer service',() => {
		const orderData: OrderTotal[] = [
			{
				customerID: "1",
				customerName: "Ravi",
				lastName: "sawant",
				orders:[
						{
							productID: "111",
							productName: "Basket",
							date: "09/14/2014",
							quantity: "1",
							unitePrice: "$29",
							total: "$29.00"
						},
						{
							productID: "112",
							productName: "pen",
							date: "03/14/2014",
							quantity: "1",
							unitePrice: "$10",
							total: "$20.00"
						}
				],
				orderTotal: "$47.00"
			},
			{
				customerID: "2",
				customerName: "Suman",
				lastName: "Rawat",
				orders:[
						{
							productID: "221",
							productName: "Basket",
							date: "09/14/2014",
							quantity: "1",
							unitePrice: "$29",
							total: "$29.00"
						},
						{
							productID: "222",
							productName: "pen",
							date: "03/14/2014",
							quantity: "1",
							unitePrice: "$10",
							total: "$20.00"
						}
				],
				orderTotal: "$47.00"
			}];

		customerService.setCustomersList(orderData);
		let getOrder = customerService.getCustomersList(); 
		expect(getOrder).toEqual(orderData);
	});
	
	it('Should be set and get single customer', () => {
		let cust = {
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
		}
		customerService.setCustomer(cust);
		let getCust = customerService.getCustomer(); 
		expect(getCust).toEqual(cust);
	});
});
