import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RequestListAcceptedComponent } from './request-list-accepted.component';
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from 'ngx-toastr';

describe('RequestListAcceptedComponent', () => {
  let component: RequestListAcceptedComponent;
  let fixture: ComponentFixture<RequestListAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ RequestListAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeDefined();
  });
   */
});

