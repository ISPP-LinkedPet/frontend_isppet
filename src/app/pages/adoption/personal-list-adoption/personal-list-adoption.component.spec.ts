import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalListAdoptionComponent } from './personal-list-adoption.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PersonalListAdoptionComponent', () => {
  let component: PersonalListAdoptionComponent;
  let fixture: ComponentFixture<PersonalListAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalListAdoptionComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalListAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
