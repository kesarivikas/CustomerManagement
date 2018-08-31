import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from '../../../customers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
	let fixture: ComponentFixture<ProfileComponent>;
	let customerService: CustomersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
			declarations: [ ProfileComponent ],
			providers: [CustomersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
		component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
	});
	
	it('should call update customer profile method', () => {
    component.updateCustomerProfile();
	});

	it('should call previous method', () => {
    component.previous();
	});
	
	it('should call cancel method', () => {
    component.cancel();
  });
});
