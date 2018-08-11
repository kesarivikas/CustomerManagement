import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../../../customers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private customerService: CustomersService, private router: Router) { }

  ngOnInit() {
		console.log("customer profile.....",this.customerService.customerProfile.firstName);
	}
	
	profile: FormGroup = this.fb.group({
		address: ['', Validators.required],
		city: ['', Validators.required],
		state: ['', Validators.required],
		zip: ['', Validators.required]
	});

	updateCustomerProfile() {
		this.customerService.customerProfile.address = this.profile.controls.address.value;
		this.customerService.customerProfile.city = this.profile.controls.city.value;
		this.customerService.customerProfile.state = this.profile.controls.state.value;
		this.customerService.customerProfile.zip = this.profile.controls.zip.value;
		this.router.navigate(['newcustomer-nav/finish'])
	}

	previous() {
		this.router.navigate(['newcustomer-nav/account']);
	}
	cancel() {
		this.router.navigate(['/customer-nav/customer-list-view']);
	}
}
