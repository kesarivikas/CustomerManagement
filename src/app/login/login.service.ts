import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {
	public loginUrl = './assets/login.json';
	public isCustomerLoggedIn = false;

  constructor(private http: HttpClient) { }

	// @Output()
	// loginFlag: EventEmitter<boolean> = new EventEmitter();

	// isLoggedIn(login) {
	// 	console.log('login service called');
	// 	this.loginFlag.emit(login);
	// }
	getLoginCredential() {
		return this.http.get(this.loginUrl);
	}
}
