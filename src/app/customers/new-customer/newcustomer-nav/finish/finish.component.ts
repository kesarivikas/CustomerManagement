import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../../../customers.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private customerService: CustomersService, private router: Router) { }

  ngOnInit() {
		this.customerService.isFinishpage = true;
		this.pupulateFinish();
  }

	finish: FormGroup = this.fb.group({
		email: ['', Validators.required],
	});

	submit() {
		this.customerService.customerProfile.email = this.finish.controls.email.value;
		this.customerService.customerProfile.customerID = this.customerService.getCustomersList() ? this.customerService.getCustomersList().length + 1 : '1';
		this.customerService.getCustomersList().push(this.customerService.customerProfile);
		console.log('customer list.....',this.customerService.getCustomersList());
		this.customerService.getCustomerProfile();
		this.router.navigate(['/customer-nav/customer-list-view']);
	}

	previous() {
		this.customerService.customerProfile.email = this.finish.controls.email.value;
		this.router.navigate(['newcustomer-nav/profile']);
	}

	pupulateFinish() {
		this.finish.patchValue({
			email: this.customerService.customerProfile.email
		})
	}

	cancel() {
		this.customerService.getCustomerProfile();
		this.router.navigate(['/customer-nav/customer-list-view']);
	}

	ngOnDestroy() {
		this.customerService.isFinishpage = false;
	}
}
