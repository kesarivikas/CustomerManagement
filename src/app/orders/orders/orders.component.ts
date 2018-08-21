import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CustomersService } from '../../customers/customers.service';
import { Observable } from 'rxjs';
import { OrderTotal } from '../order-total';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

	@ViewChild('orderSearch') orderSearch: ElementRef;
	//public customerCard: OrderTotal[];
	public searchResult: any[];
	public searchList: OrderTotal[];
  constructor(private customersService: CustomersService) { }
	public orderList: OrderTotal[];
  ngOnInit() {
		this.debounceMethod();
		this.customersService.getCustomerOrders().subscribe( orders => {
			this.orderList = orders;
			console.log("order list.....", this.orderList);
			this.searchList = orders;
		});
	}

	debounceMethod() {
		Observable.fromEvent(this.orderSearch.nativeElement, 'keyup')
		.map((evt: any) => evt.target.value)
		.debounceTime(1000)           
		.distinctUntilChanged()
		.subscribe((searchText: string) => this.searchSuggestion(searchText));
	}

	searchSuggestion(searchText) {
		this.searchResult = [];
		if( searchText.length > 0) {
			this.searchList.forEach(data => {
				if( data.customerName.toLowerCase().includes(searchText.toLowerCase())) {
					this.searchResult.push(data);
				}
				data.orders.forEach( order => {
					if(order.productName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
					{
						this.searchResult.push(data)
					}
				});
			});
				this.orderList = this.searchResult;
		} else {
				this.orderList = this.searchList;
		}
	}
}
