import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdoptionDisplayComponent} from './adoption-display.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {RequestService} from '../../../services/request/request.service';
import {AdoptionListPageComponent} from '../../../pages/adoption/list/adoption-list-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('AdoptionDisplayComponent', () => {
  let component: AdoptionDisplayComponent;
  let fixture: ComponentFixture<AdoptionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionDisplayComponent ],
      providers: [ HttpClient, HttpHandler, RequestService, AdoptionListPageComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
