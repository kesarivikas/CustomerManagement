import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavService } from './nav.service';
import { LoginService } from '../login/login.service';
import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('NavComponent', () => {
  let component: NavComponent;
	let fixture: ComponentFixture<NavComponent>;
	let loginService: LoginService;
	//let navComponent: NavComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientModule, RouterTestingModule.withRoutes([])],
			declarations: [ NavComponent ],
			providers: [LoginService, NavService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
	});

	it('should check login variable', () => {
    expect(component.isLogin).toBeFalsy;
	});
	
});
