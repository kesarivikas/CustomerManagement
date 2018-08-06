import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';


@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

	//users: any = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' }];
	customers: any;
	userFilter: any = { firstName: ''}

  constructor(private customer: CustomersService) { }

  ngOnInit() {
		this.customer.getCustomers().subscribe(data => this.customers = data);
  }

}
