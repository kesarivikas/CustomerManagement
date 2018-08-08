import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CustomersService } from '../../customers.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
	public id = '5';
  constructor( private fb: FormBuilder, private customerService: CustomersService) { }

  ngOnInit() {
		let self = this;
		this.customerService.getCustomers().subscribe( data => {
			data.forEach(function(customer) {
				if(customer.customerID === self.id) {
					self.customerService.customer = customer;
					self.pupulateEditForm(self.customerService.customer);
				}
			});
		});
	}
	
	editCustomerProfile: FormGroup = this.fb.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
		gender: [],
		email: ['', Validators.required],
		address: ['', Validators.required],
		city: ['', Validators.required],
		zip: ['', Validators.required]
	});

	pupulateEditForm(customer) {
		this.editCustomerProfile.patchValue({
			firstName: customer.firstName,
			lastName: customer.lastName,
			email: customer.email,
			address: customer.address,
			city: customer.city,
			zip: customer.zip
		})
	}
}
