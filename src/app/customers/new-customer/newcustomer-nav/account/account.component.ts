import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../../../customers.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
	//public account: FormGroup;
  constructor(private fb: FormBuilder, private customerService: CustomersService, private router: Router) { }

  ngOnInit() {
	}
	
	account: FormGroup = this.fb.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		gender: [],
	});

	accountCustomer() {
		this.customerService.customerProfile.firstName = this.account.controls.firstName.value;
		this.customerService.customerProfile.lastName = this.account.controls.lastName.value;
		this.customerService.customerProfile.gender = this.account.controls.gender.value;
		this.router.navigate(['/newcustomer-nav/profile']);
	}

	cancel() {
		this.router.navigate(['/customer-nav/customer-list-view']);
	}
}
