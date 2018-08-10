import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../customers.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private activatedRoutes: ActivatedRoute, private customerService: CustomersService) { }
	public customerID: string;
  ngOnInit() {
		this.customerID = this.activatedRoutes.snapshot.paramMap.get('customerID');
		this.customerService.setCustomerId(this.customerID);
  }

}
