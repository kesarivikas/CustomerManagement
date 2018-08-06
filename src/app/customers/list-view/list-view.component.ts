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
}
