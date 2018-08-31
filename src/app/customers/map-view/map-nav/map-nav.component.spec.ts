import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapNavComponent } from './map-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('MapNavComponent', () => {
  let component: MapNavComponent;
  let fixture: ComponentFixture<MapNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [ RouterTestingModule, HttpClientModule],
			declarations: [ MapNavComponent ],
			providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
