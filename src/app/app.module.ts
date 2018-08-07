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
import { CustomerNavComponent } from './customers/customer-nav/customer-nav.component';
import { SearchViewComponent } from './customers/search-view/search-view.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { AuthGuard } from './auth.guard';


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
		CustomerNavComponent,
		SearchViewComponent
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		TableModule,
		FilterPipeModule,
		FormsModule,
		PaginatorModule
  ],
  providers: [LoginService, CustomersService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {  }
