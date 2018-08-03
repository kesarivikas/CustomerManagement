import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
		// tslint:disable-next-line:indent
			console.log('logout component is called.....');
			this.loginService.loginFlag.subscribe((data) => {
				console.log('logout data....', data);
				if (data) {
					this.loginService.isLoggedIn(false);
				}
		});
  }
}
