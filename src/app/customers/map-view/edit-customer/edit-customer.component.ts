import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CustomersService } from '../../customers.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';
import { Customers } from '../../customers';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
	public custId: string;
	public updatedCustomerList: Customers[];
  constructor( private fb: FormBuilder, private customerService: CustomersService, private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
		this.custId = this.customerService.getCustomerId();
		let self = this;
		this.customerService.getCustomers().subscribe( data => {
			data.forEach(function(customer) {
				if(customer.customerID === self.custId) {
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

	updateCustomer() {
		this.updatedCustomerList=[];
		let self = this;
		this.customerService.getCustomers().subscribe(data => {
			data.forEach( customer => {
				if(customer.firstName === self.editCustomerProfile.controls.firstName.value) {
					customer.lastName = self.editCustomerProfile.controls.lastName.value;
					customer.address = self.editCustomerProfile.controls.address.value;
					customer.city = self.editCustomerProfile.controls.city.value;
					customer.email = self.editCustomerProfile.controls.email.value;
					customer.zip = self.editCustomerProfile.controls.zip.value;
				}
				self.updatedCustomerList.push(customer);
			});
			self.customerService.setCustomersList(self.updatedCustomerList);
		});
	}

	deleteCustomer() {

	}
}
