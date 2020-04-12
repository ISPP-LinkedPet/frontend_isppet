import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdoptionListComponent} from './adoption-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {RequestService} from 'src/app/services/request/request.service';
import {AdoptionListPageComponent} from '../../../pages/adoption/list/adoption-list-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('AdoptionListComponent', () => {
  let component: AdoptionListComponent;
  let fixture: ComponentFixture<AdoptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionListComponent ],
      providers: [ HttpClient, HttpHandler, RequestService, AdoptionListPageComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
