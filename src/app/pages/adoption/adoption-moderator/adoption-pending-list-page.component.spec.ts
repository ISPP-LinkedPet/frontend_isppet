import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionPendingListPageComponent } from './adoption-pending-list-page.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AdoptionPendingListPageComponent', () => {
  let component: AdoptionPendingListPageComponent;
  let fixture: ComponentFixture<AdoptionPendingListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionPendingListPageComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionPendingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
