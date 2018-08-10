import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { ListViewComponent } from './customers/list-view/list-view.component';
import { CustomerNavComponent } from './customers/customer-nav/customer-nav.component';
import { CardViewComponent } from './customers/card-view/card-view.component';
import { SearchViewComponent } from './customers/search-view/search-view.component';
import { AuthGuard } from './auth.guard';
import { MapNavComponent } from './customers/map-view/map-nav/map-nav.component';
import { CustomerDetailsComponent } from './customers/map-view/customer-details/customer-details.component';
import { CustomerOrdersComponent } from './customers/map-view/customer-orders/customer-orders.component';
import { EditCustomerComponent } from './customers/map-view/edit-customer/edit-customer.component';


const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'logout', component: LogoutComponent },
	{ path: 'customer-nav', component: CustomerNavComponent,
		children: [
			{ path: '', redirectTo: 'customer-card-view', pathMatch: 'full' },
			{ path: 'customer-list-view', component: ListViewComponent },
			{ path: 'customer-card-view', component: CardViewComponent },
			{ path: 'search-view', component: SearchViewComponent },
		],
		canActivate: [AuthGuard]
	},
	//{ path: 'map-view/customer-details/list.firstName', component: CustomerDetailsComponent }.component,
	{ path: 'map-view', component: MapNavComponent, 
		children: [
			{ path: '', redirectTo: 'customer-details/:customerID', pathMatch: 'full' },
			{ path: 'customer-details/:customerID', component: CustomerDetailsComponent },
			{ path: 'customer-orders', component: CustomerOrdersComponent },
			{ path: 'edit-customers', component: EditCustomerComponent },
		],canActivate: [AuthGuard]
	},
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: []
})
export class AppRoutingModule { }