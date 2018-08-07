import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../customers/customers';

@Injectable()
export class CustomersService {
	public customersUrl = './assets/customers-profile.json';
	public customerList;
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
}
