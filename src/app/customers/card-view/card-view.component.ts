import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { Observable } from 'rxjs';
import { Order } from '../../orders/order-total';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

	// @ViewChild('firstName') firstName: ElementRef;
  //   search: string;
	//public customerCard: Observable<Customers[]>;
	public customerCard: Customers[];
	public display: boolean = false;
	public currentCustomerOrders: Order[];
	public orderTotal: string;
	public customerName: string;
  constructor(private customersService: CustomersService) { }

  ngOnInit() {
		// this.debounceMethod();
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
					this.customerName = order.customerName;
					console.log('in order totla list.....',this.currentCustomerOrders);
					console.log('in order totla list.....',this.currentCustomerOrders);
			 		return true;
			 	}	
			 });		
		});
	}

	closePopUp(){
		this.display = false;
	}

	// debounceMethod() {
	// 	Observable.fromEvent(this.firstName.nativeElement, 'keyup')
  //     // get value
  //     .map((evt: any) => evt.target.value)
  //     // text length must be > 2 chars
  //     //.filter(res => res.length > 2)
  //     // emit after 1s of silence
  //     .debounceTime(1000)        
  //     // emit only if data changes since the last emit       
  //     .distinctUntilChanged()
  //     // subscription
  //     .subscribe((text: string) => this.searchSuggestion(text));
	// }

	searchSuggestion(text) {
		console.log('implementing search suggesion...',text);
		this.customerCard.forEach(data => {
			//if( this.)
		});
	}
}
