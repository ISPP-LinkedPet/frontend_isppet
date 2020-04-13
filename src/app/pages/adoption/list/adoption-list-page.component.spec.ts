import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionListPageComponent } from './adoption-list-page.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AdoptionListPageComponent', () => {
  let component: AdoptionListPageComponent;
  let fixture: ComponentFixture<AdoptionListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionListPageComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
