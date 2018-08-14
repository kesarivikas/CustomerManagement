import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { Observable } from 'rxjs/Observable';
import { Order } from '../../orders/order-total';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
	//public customerCard: Observable<Customers[]>;
	public customerCard: Customers[];
	public display: boolean = false;
	public currentCustomerOrders: Order[];
	public orderTotal: string;
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
	}

	popupModel(name) {
		this.display = true;
		this.customersService.getCustomerOrders().subscribe(orderTotal => {
			orderTotal.forEach( order => {
			 	if( name === order.customerName) {
					this.currentCustomerOrders = order.orders;
					this.orderTotal = order.orderTotal;
					console.log('in order totla list.....',this.currentCustomerOrders);
					console.log('in order totla list.....',this.currentCustomerOrders);
			 		return true;
			 	}	
			 });		
		});
	}

}
