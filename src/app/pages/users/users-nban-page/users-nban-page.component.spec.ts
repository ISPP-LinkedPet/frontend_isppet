import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersNbanPageComponent} from './users-nban-page.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UsersNbanPageComponent', () => {
  let component: UsersNbanPageComponent;
  let fixture: ComponentFixture<UsersNbanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersNbanPageComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersNbanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
