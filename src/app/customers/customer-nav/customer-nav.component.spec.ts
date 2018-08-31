import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNavComponent } from './customer-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerNavComponent', () => {
  let component: CustomerNavComponent;
  let fixture: ComponentFixture<CustomerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
      declarations: [ CustomerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
