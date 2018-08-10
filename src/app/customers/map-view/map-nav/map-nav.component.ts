import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-map-nav',
  templateUrl: './map-nav.component.html',
  styleUrls: ['./map-nav.component.css']
})
export class MapNavComponent implements OnInit {

  constructor(private activatedRoutes: ActivatedRoute) { }
  ngOnInit() {
		
  }
}
