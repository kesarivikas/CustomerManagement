import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { NavService } from '../nav/nav.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private navService: NavService) { 
		this.navService.hide();
	}

  ngOnInit() {
		this.router.navigate(['login']);
  }
}
