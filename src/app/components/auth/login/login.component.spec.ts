import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginRegisterComponent} from '../../../pages/login-register/login-register.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ HttpClient, HttpHandler, LoginRegisterComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('LoginComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
