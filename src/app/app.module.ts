import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { LoginService } from './login/login.service';
import { LogoutComponent } from './logout/logout.component';
import { CardViewComponent } from './Customers/card-view/card-view.component';
import { ListViewComponent } from './customers/list-view/list-view.component';
import { CustomerDetailsComponent } from './customers/map-view/customer-details/customer-details.component';
import { CustomerOrdersComponent } from './customers/map-view/customer-orders/customer-orders.component';
import { EditCustomerComponent } from './customers/map-view/edit-customer/edit-customer.component';

import { CustomersService } from './customers/customers.service';



@NgModule({
  declarations: [
    AppComponent,
		NavComponent,
		LoginComponent,
		AboutComponent,
		LogoutComponent,
		CardViewComponent,
		ListViewComponent,
		CustomerDetailsComponent,
		CustomerOrdersComponent,
		EditCustomerComponent
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		TableModule
  ],
  providers: [LoginService, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
