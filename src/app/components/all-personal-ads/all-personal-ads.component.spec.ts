import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AllPersonalAdsComponent} from './all-personal-ads.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('AllPersonalAdsComponent', () => {
  let component: AllPersonalAdsComponent;
  let fixture: ComponentFixture<AllPersonalAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPersonalAdsComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPersonalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
