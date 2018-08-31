import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewComponent } from './list-view.component';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { TableModule } from 'primeng/table';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('ListViewComponent', () => {
  let component: ListViewComponent;
	let fixture: ComponentFixture<ListViewComponent>;
	let customerService: CustomersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [	HttpClientModule, FormsModule, 
									RouterTestingModule.withRoutes([]),
									TableModule],
			declarations: [ ListViewComponent ],
			providers: [CustomersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
		component = fixture.componentInstance;
		let service = TestBed.get(CustomersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
