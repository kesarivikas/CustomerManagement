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
import { CardViewComponent } from './customers/card-view/card-view.component';
import { ListViewComponent } from './customers/list-view/list-view.component';
import { CustomerOrdersComponent } from './customers/map-view/customer-orders/customer-orders.component';
import { EditCustomerComponent } from './customers/map-view/edit-customer/edit-customer.component';

import { CustomersService } from './customers/customers.service';
import { SearchViewComponent } from './customers/search-view/search-view.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { AuthGuard } from './auth.guard';
import { MapNavComponent } from './customers/map-view/map-nav/map-nav.component';
import { CustomerDetailsComponent } from './customers/map-view/customer-details/customer-details.component';
import {InputTextModule} from 'primeng/inputtext';
import { NewcustomerNavComponent } from './customers/new-customer/newcustomer-nav/newcustomer-nav.component';
import { AccountComponent } from './customers/new-customer/newcustomer-nav/account/account.component';
import { ProfileComponent } from './customers/new-customer/newcustomer-nav/profile/profile.component';
import { FinishComponent } from './customers/new-customer/newcustomer-nav/finish/finish.component';
import { CustomerNavComponent } from './customers/customer-nav/customer-nav.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavService } from './nav/nav.service';
import { OrdersComponent } from './orders/orders/orders.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {NgxPaginationModule} from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
		NavComponent,
		LoginComponent,
		AboutComponent,
		LogoutComponent,
		CardViewComponent,
		ListViewComponent,
		CustomerOrdersComponent,
		EditCustomerComponent,
		SearchViewComponent,
		MapNavComponent,
		CustomerDetailsComponent,
		NewcustomerNavComponent,
		AccountComponent,
		ProfileComponent,
		FinishComponent,
		CustomerNavComponent,
		OrdersComponent
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		TableModule,
		FilterPipeModule,
		FormsModule,
		PaginatorModule,
		InputTextModule,
		DialogModule,
		BrowserAnimationsModule,
		AutoCompleteModule,
		NgxPaginationModule,
		AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [LoginService, CustomersService, NavService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {  }
