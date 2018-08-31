import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from '../../../customers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports:[ RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
			declarations: [ AccountComponent ],
			providers: [CustomersService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
	});
	
	it('should call acoountCustomer method', () => {
		component.accountCustomer();
	});
	
	it('should call cancel method', () => {
		component.cancel();
  });
});
