import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../customers/customers';

@Injectable()
export class CustomersService {
	public customersUrl = './assets/customers-profile.json';
  constructor(private httpClient: HttpClient) { }

	getCustomers() {
		return this.httpClient.get<Customers[]>(this.customersUrl);
	}
}
