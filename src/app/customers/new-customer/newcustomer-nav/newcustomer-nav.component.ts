import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../customers.service';

@Component({
  selector: 'app-newcustomer-nav',
  templateUrl: './newcustomer-nav.component.html',
  styleUrls: ['./newcustomer-nav.component.css']
})
export class NewcustomerNavComponent implements OnInit {

  constructor(public customerService: CustomersService) { }

  ngOnInit() {
		console.log('nav page profile value....', this.customerService.isProfilePage);
  }
	
}
