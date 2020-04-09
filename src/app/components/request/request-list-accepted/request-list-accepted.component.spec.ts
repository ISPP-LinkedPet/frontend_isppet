import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RequestListAcceptedComponent} from './request-list-accepted.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';

// Checked
describe('RequestListAcceptedComponent', () => {
  let component: RequestListAcceptedComponent;
  let fixture: ComponentFixture<RequestListAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListAcceptedComponent ],
      providers: [ HttpClient, HttpHandler, ToastrModule.forRoot() ],
      imports: [ RouterTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

