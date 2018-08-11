import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../customers/customers';

@Injectable()
export class CustomersService {
	public customersUrl = './assets/customers-profile.json';
	public customerList;
	public customer;
	public customerID: string;
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
		console.log('updated customer lisrt',custList);
		this.customerList = custList;
	}

	getCustomersList() {
		console.log('get customer list.....',this.customerList);
		return this.customerList;
	}

	setCustomer(customer) {
		this.customer = customer;
	}

	getCustomer() {
		return this.customer;
	}
	
	setCustomerId(id) {
		this.customerID = id;
		console.log('set method is called.....',id);
	}
	getCustomerId() {
		console.log('get method is called.....',this.customerID);
		return this.customerID;
	}
}
