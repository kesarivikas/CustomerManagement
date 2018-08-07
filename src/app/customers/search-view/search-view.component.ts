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
	userFilter: any = { firstName: ''};

  constructor(private customer: CustomersService) { }

  ngOnInit() {
		this.customer.getCustomers().subscribe(data => {
			this.customers = data
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
		console.log('newly list....', this.customers);
		this.customer.setCustomersList(this.customers);
	}

	paginate(event) {
		console.log('paginator method is called.....');
		event.first = 1; //Index of the first record
		event.rows = 3; //Number of rows to display in new page
		//event.page = Index of the new page
		event.pageCount = 10;//Total number of pages
	}
}
