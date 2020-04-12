import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdoptionPendingListComponent} from './adoption-pending-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RequestService} from '../../../services/request/request.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('AdoptionPendingListComponent', () => {
  let component: AdoptionPendingListComponent;
  let fixture: ComponentFixture<AdoptionPendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionPendingListComponent ],
      providers: [ HttpClient, HttpHandler, RequestService ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
