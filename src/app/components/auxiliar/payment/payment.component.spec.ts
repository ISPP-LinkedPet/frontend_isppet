import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PaymentComponent} from './payment.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, ToastrModule.forRoot(), HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('PaymentComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
