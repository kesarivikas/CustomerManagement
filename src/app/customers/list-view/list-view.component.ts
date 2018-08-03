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
	public customerList: any; //Observable<any>;
	
	constructor(private customersService: CustomersService) { }
	
	ngOnInit() {
		console.log('customer list is called....');
		this.customersService.getCustomers().subscribe(data => this.customerList = data);
		//this.customersService.getCustomers().subscribe(data => console.log('list view data....', data) );
  }

}
