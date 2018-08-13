import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../customers/customers';
import { OrderTotal } from '../orders/order-total';

@Injectable()
export class CustomersService {
	public customersUrl = './assets/customers-profile.json';
	public customerOrders = './assets/orders.json';
	public customerList;
	public customer;
	public customerID: string;
	public isProfilePage: boolean = false;
	public isAccountPage: boolean = false;
	public isFinishpage: boolean = false;
	public newCustomer: Customers[];
	customerProfile = {
		customerID:'',
		firstName: '',
		lastName: '',
		gender: '',
		address: '',
		city: '',
		state:'',
		zip: '',
		email: ''
	}
	
  constructor(private httpClient: HttpClient) { }

	getCustomers() {
		return this.httpClient.get<Customers[]>(this.customersUrl);
	}

	setCustomersList(custList) {
		this.customerList = custList;
	}

	getCustomersList() {
		return this.customerList;
	}

	getCustomerOrders() {
		return this.httpClient.get<OrderTotal[]>(this.customerOrders);
	}

	setCustomer(customer) {
		this.customer = customer;
	}

	getCustomer() {
		return this.customer;
	}
	
	setCustomerId(id) {
		this.customerID = id;
	}
	getCustomerId() {
		return this.customerID;
	}


	getCustomerProfile() {
		return this.customerProfile = {
			customerID:'',
			firstName: '',
			lastName: '',
			gender: '',
			address: '',
			city: '',
			state:'',
			zip: '',
			email: ''
		}
	}
}
