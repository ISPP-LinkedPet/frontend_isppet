import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalListComponent } from './personal-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PersonalListComponent', () => {
  let component: PersonalListComponent;
  let fixture: ComponentFixture<PersonalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalListComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
