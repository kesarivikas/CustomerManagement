import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	public isLogin: boolean;
  constructor(private loginService: LoginService, public navService: NavService) { }

  ngOnInit() {
		console.log('navigation called..');
		//this.loginService.loginFlag.subscribe((data) => this.isLogin = data);
		//this.loginService.loginFlag.subscribe((data) => this.isLogin = data);
		this.isLogin = this.loginService.isCustomerLoggedIn;
		console.log('user is logged in...',this.loginService.isCustomerLoggedIn);
  }
}
