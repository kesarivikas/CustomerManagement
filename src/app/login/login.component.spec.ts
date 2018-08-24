import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import { LoginComponent } from './login.component';
import { Login } from './login';
import {By} from "@angular/platform-browser";
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('Component: LoginComponent', () => {
  let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let submit: DebugElement;
  let email: DebugElement;
  let password: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			declarations: [ LoginComponent ],
			providers:[FormGroup, FormBuilder, FormsModule],
			schemas: [NO_ERRORS_SCHEMA]
    })
		.compileComponents();
		
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
		console.log("login component is called....");
  }));

  beforeEach(() => {

		submit = fixture.debugElement.query(By.css('button'));
    email = fixture.debugElement.query(By.css('input[type=email]'));
    password = fixture.debugElement.query(By.css('input[type=password]'));

    // fixture.detectChanges();
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
