import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClient} from '@angular/common/http';
// import { HttpHandler  } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { Login } from './login';

describe('LoginService', () => {
	//let injector;
	let service: LoginService;
	let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
      providers: [LoginService, HttpClient]
		});

		// injector = getTestBed();
		// service = injector.get(LoginService);
		// httpMock = injector.get(HttpTestingController);

		service =  TestBed.get(LoginService);
		httpMock = TestBed.get(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});

  it('should be created', inject([LoginService], (service: LoginService) => {
   expect(service).toBeTruthy();
 	}));

	it('It should retirve data from the http get method', () => {
		const loginCredentials: Login[] = [
			{ username: "adminadmin",password: "adminadmin" },
			{ username: "adminadmin1",password: "adminadmin1"}
		];

		service.getLoginCredential().subscribe(loginData => {
			expect(loginData.length).toBe(2);
		});
		const reqObj = httpMock.expectOne(`${service.loginUrl}`);
		expect(reqObj.request.method).toBe('GET');
		reqObj.flush(loginCredentials);
	});
});
