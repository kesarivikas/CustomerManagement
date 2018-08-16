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
	//public customerList: Observable<Customers[]>;
	public customerList: Customers[];
	constructor(private customersService: CustomersService) { }
	ngOnInit() {
		if(this.customersService.getCustomersList()){
			this.customerList=this.customersService.getCustomersList();
		} else {
			this.customersService.getCustomers().subscribe(data => this.customerList = data);
		}
	}
	
	// paginate(event) {
	// 	event.first = 1;//Index of the first record
	// 	event.rows = 5;//Number of rows to display in new page
	// 	//event.page = Index of the new page
	// 	event.pageCount = 5 //Total number of pages
	// }
}
