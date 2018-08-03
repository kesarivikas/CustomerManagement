import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	public isLogin: boolean;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
		console.log('navigation called..');
		//this.loginService.loginFlag.subscribe((data) => this.isLogin = data);
		this.loginService.loginFlag.subscribe((data) => this.isLogin = data);
  }
}
