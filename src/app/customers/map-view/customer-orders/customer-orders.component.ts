import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../customers.service';
import { Order } from '../../../orders/order-total';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
	public customerOrders: Order[];
	public custName: string;
	public totalCost: string;
  constructor(private customerService: CustomersService, private activatedRoutes :ActivatedRoute) { }

  ngOnInit() {
		this.custName = this.activatedRoutes.snapshot.queryParamMap.get('firstName');
		this.customerService.getCustomerOrders().subscribe(OrderTotals => {
			OrderTotals.forEach(order => {
				if(order.customerName === this.custName) {
					console.log('customer name', order.customerName);
					this.custName = order.customerName;
					this.customerOrders = order.orders;
					this.totalCost = order.orderTotal;
				}
			});
	});
  }
}
