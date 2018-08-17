import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';



@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

	customers: Customers[];
	searchText: boolean = false;
	userFilter: any = { firstName: ''};

  constructor(private customer: CustomersService) { }

  ngOnInit() {
		console.log('search view is called....');
		this.customer.getCustomers().subscribe(data => {
			this.customers = data;
			this.customer.setCustomersList(data);
		});
	}
	
	deleteCustomer(customerId) {
		this.customers = [];
		this.customer.getCustomersList().forEach(customer => {
			if( customer.customerID !== customerId) {
				this.customers.push(customer);
			}
		});
		this.customer.setCustomersList(this.customers);
	}
}
