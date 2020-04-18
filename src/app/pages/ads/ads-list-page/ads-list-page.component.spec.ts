import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdsListPageComponent} from './ads-list-page.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AdsListPageComponent', () => {
  let component: AdsListPageComponent;
  let fixture: ComponentFixture<AdsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsListPageComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
