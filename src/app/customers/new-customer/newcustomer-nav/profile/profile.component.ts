import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../../../customers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
	public isProfielPage: boolean = false;
  constructor(private fb: FormBuilder, private customerService: CustomersService, private router: Router) { }

  ngOnInit() {
		this.customerService.isProfilePage = true;
		this.populateProfileForm();
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

	populateProfileForm() {
		this.profile.patchValue({
			address: this.customerService.customerProfile.address,
			city: this.customerService.customerProfile.city,
			zip: this.customerService.customerProfile.zip,
			state: this.customerService.customerProfile.state
		})
	}
	cancel() {
		this.customerService.getCustomerProfile();
		this.router.navigate(['/customer-nav/customer-list-view']);
	}
	ngOnDestroy() {
		this.customerService.isProfilePage = false;
	}
}
