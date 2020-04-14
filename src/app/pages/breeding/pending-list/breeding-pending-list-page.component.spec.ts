import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingPendingListPageComponent } from './breeding-pending-list-page.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BreedingPendingListPageComponent', () => {
  let component: BreedingPendingListPageComponent;
  let fixture: ComponentFixture<BreedingPendingListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingPendingListPageComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingPendingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
