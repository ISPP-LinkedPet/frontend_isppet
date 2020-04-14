import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {VetPremiumComponent} from './vet-premium.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('VetPremiumComponent', () => {
  let component: VetPremiumComponent;
  let fixture: ComponentFixture<VetPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetPremiumComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
