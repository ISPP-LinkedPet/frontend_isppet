import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingListPageComponent } from './breeding-list-page.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BreedingListPageComponent', () => {
  let component: BreedingListPageComponent;
  let fixture: ComponentFixture<BreedingListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingListPageComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
