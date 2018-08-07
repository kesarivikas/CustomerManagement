import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
	public isLoggedInUser;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
		this.loginService.isCustomerLoggedIn = false;
		this.isLoggedInUser = this.loginService.isCustomerLoggedIn;
		console.log('logout component is called.....',this.loginService.isCustomerLoggedIn);
		this.router.navigate(['login']);
  }
}
