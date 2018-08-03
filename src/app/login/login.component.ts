import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {

	}

		loginForm: FormGroup = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
	  });

	isUserLoggedIn() {
		const self = this;
	 	this.loginService.getLoginCredential().subscribe((respose: Array<any>) => {
	 		respose.forEach(function(user) {
	 			if (user.username === self.loginForm.controls.username.value && user.password === self.loginForm.controls.password.value) {
  				self.loginService.isCustomerLoggedIn = true;
	  			self.loginService.isLoggedIn(true);
	 				self.router.navigate(['about']);
	 				}
	  			console.log('login credential', self.loginService.isCustomerLoggedIn);
	 		 })
	 	}); 
	}
}
