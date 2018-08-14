import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../customers/customers.service';
import { Observable } from 'rxjs/Observable';
import { OrderTotal } from '../order-total';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private customersService: CustomersService) { }
	public orderList: OrderTotal[];
  ngOnInit() {
		this.customersService.getCustomerOrders().subscribe( orders => this.orderList = orders);
	}
}
