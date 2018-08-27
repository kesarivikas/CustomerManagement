import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import {Component, DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import { LoginComponent } from './login.component';
import { Login } from './login';
import { LoginService } from './login.service';
//import {By} from "@angular/platform-browser";
//import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('Component: LoginComponent', () => {
  let loginComponent: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	// let submit: DebugElement;
  // let email: DebugElement;
  // let password: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, FormsModule, HttpClientModule, Router, RouterTestingModule.withRoutes([])],
			declarations: [ LoginComponent ],
			providers:[LoginService, HttpClientModule]
    });
		fixture = TestBed.createComponent(LoginComponent);
		loginComponent = fixture.componentInstance;
		loginComponent.ngOnInit();
  });

	const mockRouter = {
		navigate: jasmine.createSpy('navigate')
	};
  // beforeEach(() => {
	
		// submit = fixture.debugElement.query(By.css('button'));
    // email = fixture.debugElement.query(By.css('input[type=email]'));
    // password = fixture.debugElement.query(By.css('input[type=password]'));
  //   fixture.detectChanges();
	// });

	it('Should load the login component', () => {
		//expect(component.form.valid).toBeFalsy();
		expect(loginComponent.loginForm.valid).toBeFalsy();
		console.log("login component is called....");
	});
	
	// it('Entering email and password', () => {
	// 	let user: Login;
  //   // email.nativeElement.value = "test@example.com";
	// 	// password.nativeElement.value = "123456";
	// 	// submit.triggerEventHandler('click', null); 

	// 	expect(user.username).toBe("adminadmin");
	// 	expect(user.password).toBe("adminadmin");

  //   fixture.detectChanges();
  // });

  //  it('should create', () => {
  //    expect(component).toBeTruthy();
  //  });
});
