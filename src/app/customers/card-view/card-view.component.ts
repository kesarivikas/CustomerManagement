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
	//public customerCard: Observable<Customers[]>;
	public customerCard: Customers[];
	public display: boolean = false;
	public currentCustomer;
  constructor(private customersService: CustomersService) { }

  ngOnInit() {
		//this.customerCard = this.customersService.getCustomers();
		if(this.customersService.getCustomersList()) {
			this.customerCard = this.customersService.getCustomersList();
		} else {
			this.customersService.getCustomers().subscribe(data => {
				this.customerCard = data;
				this.customersService.setCustomersList(data);
			})
		}
		console.log('customer card', this.customerCard);
	}

	popupModel(email) {
		this.display = true;
		console.log('pop up is called...',email);
		this.customersService.getCustomersList().forEach(customer => {
			if( email === customer.email) {
				this.currentCustomer = customer;
				return true;
			}			
		});
	}

}
