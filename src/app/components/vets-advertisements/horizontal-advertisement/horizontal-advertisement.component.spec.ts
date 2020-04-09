import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { HorizontalAdvertisementComponent } from './horizontal-advertisement.component';
import { RouterTestingModule } from '@angular/router/testing';

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
    component.advertisements = ['ad.jpg'];
    fixture.detectChanges();
  });

  it('HorizontalAdvertisementComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
