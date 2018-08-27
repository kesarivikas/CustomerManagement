import { TestBed, inject } from '@angular/core/testing';
import { NavService } from './nav.service';

describe('NavService', () => {
	let navService: NavService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavService]
		});
		navService = TestBed.get(NavService);
  });

  it('should be created', inject([NavService], (service: NavService) => {
    expect(service).toBeTruthy();
	}));
	
	it('Should call show method of navservice', () => {
		let vis = navService.show();
		expect(vis).toBeTruthy;
	})

	it('Should call hide method of navservice', () => {
		let vis = navService.hide();
		expect(vis).toBeFalsy;
	})
});
