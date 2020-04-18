import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdsEditPageComponent} from './ads-edit-page.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AdsEditPageComponent', () => {
  let component: AdsEditPageComponent;
  let fixture: ComponentFixture<AdsEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsEditPageComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
