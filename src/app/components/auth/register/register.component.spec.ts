import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RegisterComponent} from './register.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginRegisterComponent} from '../../../pages/login-register/login-register.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [ HttpClient, HttpHandler, LoginRegisterComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('RegisterComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
