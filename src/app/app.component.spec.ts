import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from '../app/nav/nav.component'
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../app/login/login.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavService } from '../app/nav/nav.service'


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [ RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
			declarations: [
				AppComponent,
				NavComponent
			],
			providers: [ LoginService, NavService ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
