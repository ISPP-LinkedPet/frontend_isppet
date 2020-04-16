import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdsListComponent} from './ads-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AdsListComponent', () => {
  let component: AdsListComponent;
  let fixture: ComponentFixture<AdsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsListComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
