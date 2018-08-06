import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
	public customerCard: Observable<Customers[]>;
	
  constructor(private customersService: CustomersService) { }

  ngOnInit() {
		this.customerCard = this.customersService.getCustomers();
  }

}
