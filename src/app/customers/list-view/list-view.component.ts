import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
	public customerList: Observable<Customers[]>;
	
	constructor(private customersService: CustomersService) { }
	ngOnInit() {
		this.customerList = this.customersService.getCustomers();
	}
	
	paginate(event) {
		event.first = 1;//Index of the first record
		event.rows = 5;//Number of rows to display in new page
		//event.page = Index of the new page
		event.pageCount = 5 //Total number of pages
}
}
