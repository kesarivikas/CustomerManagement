import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { ListViewComponent } from './customers/list-view/list-view.component'


const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'logout', component: LogoutComponent },
	{ path: 'customer-list', component: ListViewComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: []
})
export class AppRoutingModule { }