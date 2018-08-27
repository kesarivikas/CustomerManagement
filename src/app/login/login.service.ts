import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable()
export class LoginService {
	public loginUrl = './assets/login.json';
	public isCustomerLoggedIn = false;

  constructor(private http: HttpClient) { }

	getLoginCredential() {
		return this.http.get<Login[]>(this.loginUrl);
	}
}
