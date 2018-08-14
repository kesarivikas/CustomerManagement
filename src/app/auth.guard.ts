import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(private loginService: LoginService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		// this.router.navigate(['login']);
		console.log('login user.....', this.loginService.isCustomerLoggedIn);
    return true;//this.loginService.isCustomerLoggedIn;
  }
}
