import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../../../customers.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private fb: FormBuilder, private customerService: CustomersService, private router: Router) { }

  ngOnInit() {
		console.log('finish page,....', this.customerService.customerProfile.address);
  }

	finish: FormGroup = this.fb.group({
		email: ['', Validators.required],
	});

	submit() {
		this.customerService.customerProfile.email = this.finish.controls.email.value;
		this.customerService.customerProfile.customerID = this.customerService.getCustomersList() ? this.customerService.getCustomersList().length : '1';
		this.customerService.getCustomersList().push(this.customerService.customerProfile);
		console.log('customer list.....',this.customerService.getCustomersList());
		this.router.navigate(['/customer-nav/customer-list-view']);
	}

	previous() {
		this.router.navigate(['newcustomer-nav/profile']);
	}

	cancel() {
		this.router.navigate(['/customer-nav/customer-list-view']);
	}
}
