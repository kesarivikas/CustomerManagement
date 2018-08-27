import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../login/login.service';
import { Login } from '../login/login';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder, private navService: NavService) { }
	public isLoggedInUser;
  ngOnInit() {
	}

	loginForm: FormGroup = this.fb.group({
		username: ['', Validators.required],
		password: ['', Validators.required]
	});

	login() {
		const self = this;
	 	this.loginService.getLoginCredential().subscribe((respose: Array<Login>) => {
	 		respose.forEach(function(user) {	
	 			if (user.username === self.loginForm.controls.username.value && user.password === self.loginForm.controls.password.value) {
					self.loginService.isCustomerLoggedIn = true;
					self.navService.show();
					self.isLoggedInUser = true;
					self.router.navigate(['about']);
	 			}
			});
			if(!self.isLoggedInUser) {
				alert('Invalid username and password');
			}
	 	});
	}
}
