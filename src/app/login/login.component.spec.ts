import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import { LoginComponent } from './login.component';
import { Login } from './login';
import { LoginService } from './login.service';
import {By} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NavService } from '../nav/nav.service';

describe('Component: LoginComponent', () => {
  let loginComponent: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, FormsModule, HttpClientModule, RouterTestingModule.withRoutes([])],
			declarations: [ LoginComponent ],
			providers:[LoginService, NavService, HttpClientModule]
    });
		fixture = TestBed.createComponent(LoginComponent);
		loginComponent = fixture.componentInstance;
		loginService = TestBed.get(LoginService);
		loginComponent.ngOnInit();
  });

   beforeEach(() => {
     fixture.detectChanges();
	 });

		it('should create', () => {
			expect(loginComponent).toBeTruthy();
		}); 

	 it('Should load the login component', () => {
	 	expect(loginComponent.loginForm.valid).toBeFalsy();
	 });

		it('Should test the auth customer', () => {
			spyOn(loginService, 'isCustomerLoggedIn').and.returnValue(true);
		});

		it('Should called login method', () => {
			loginComponent.loginForm.controls['username'].setValue("adminadmin");
			loginComponent.loginForm.controls['password'].setValue("adminadmin");
			loginComponent.login();
		}); 
});
