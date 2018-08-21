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

	@ViewChild('firstName') firstName: ElementRef;
  //search: string;
	//public customerCard: Observable<Customers[]>;
	public customerCard: Customers[];
	public display: boolean = false;
	public currentCustomerOrders: Order[];
	public orderTotal: string;
	public customerName: string;
	public searchResult: any[];
	public city: string;
	public state: string;
	public lastName: string;
	public photo: string;
	public p: number = 1;
   // collection: any[] = someArrayOfThings;  

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
		this.debounceMethod();
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
		console.log("customer details list. for popup...",this.customersService.getCustomersList());
		this.customersService.getCustomersList().forEach(customer =>{
			if (name === customer.firstName) {
				this.city = customer.city;
				this.state = customer.state;
				this.photo = customer.imageUrl;
			}
		})
		this.customersService.getCustomerOrders().subscribe(orderTotal => {
			orderTotal.forEach( order => {
			 	if( name === order.customerName) {
					this.currentCustomerOrders = order.orders;
					this.orderTotal = order.orderTotal;
					this.customerName = order.customerName;
					this.lastName = order.lastName;
			 		return true;
			 	}	
			 });		
		});
	}

	closePopUp(){
		this.display = false;
	}

	debounceMethod() {
	Observable.fromEvent(this.firstName.nativeElement, 'keyup')
		.map((evt: any) => evt.target.value)
		.debounceTime(1000)           
		.distinctUntilChanged()
		.subscribe((searchText: string) => this.searchSuggestion(searchText));
	 }

	searchSuggestion(searchText) {
		this.searchResult = [];
		if( searchText.length > 0) {
			this.customersService.getCustomersList().forEach(data => {
				if( data.firstName.toLowerCase().includes(searchText.toLowerCase())) {
					this.searchResult.push(data);
				}
			});
			//if( this.searchResult.length > 0) {
				this.customerCard = this.searchResult;
			// } else {
			// 	this.customerCard = this.customersService.getCustomersList();
		//	} 
		} else {
			this.customerCard = this.customersService.getCustomersList();
		}
	}
}
