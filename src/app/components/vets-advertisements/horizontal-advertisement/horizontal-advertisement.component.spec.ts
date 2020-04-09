import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HorizontalAdvertisementComponent} from './horizontal-advertisement.component';
import {RouterTestingModule} from '@angular/router/testing';

// Checked
describe('HorizontalAdvertisementComponent', () => {
  let component: HorizontalAdvertisementComponent;
  let fixture: ComponentFixture<HorizontalAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalAdvertisementComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalAdvertisementComponent);
    component = fixture.componentInstance;
    component.advertisement = ['ad.jpg'];
    fixture.detectChanges();
  });
});
