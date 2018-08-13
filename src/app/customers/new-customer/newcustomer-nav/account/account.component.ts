import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../../../customers.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnDestroy {
	//public account: FormGroup;
  constructor(private fb: FormBuilder, private customerService: CustomersService, private router: Router) { }

  ngOnInit() {
		this.customerService.isAccountPage = true;
		this.populateAccountForm();
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

	populateAccountForm() {
		this.customerService.customerProfile.firstName
		this.account.patchValue({
			firstName: this.customerService.customerProfile.firstName,
			lastName: this.customerService.customerProfile.lastName,
			gender: this.customerService.customerProfile.gender
		})
	}

	cancel() {
		this.customerService.getCustomerProfile();
		this.router.navigate(['/customer-nav/customer-list-view']);
	}

	ngOnDestroy() {
		this.customerService.isAccountPage = false;
	}
}
