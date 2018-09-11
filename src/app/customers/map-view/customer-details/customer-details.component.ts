import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../customers.service';
import { Customers } from '../../customers';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private activatedRoutes: ActivatedRoute, private customerService: CustomersService) { }
	public firstName: string;
	public currentCustomer: Customers;
	public zoom: number;
	// lat: number = 51.678418;
  // lng: number = 7.809007;
  ngOnInit() {
//		this.zoom = 15;
		this.firstName = this.activatedRoutes.snapshot.queryParamMap.get('firstName');
		// this.customerService.setCustomer(this.firstName);
		this.customerService.getCustomersList().forEach(customer => {
			if (customer.firstName === this.firstName) {
				console.log('Integrating google map.......', this.firstName);
				this.currentCustomer = customer;
				return true;
			}
		});
  }
}
