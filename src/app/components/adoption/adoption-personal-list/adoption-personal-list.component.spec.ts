import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdoptionPersonalListComponent} from './adoption-personal-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('AdoptionPersonalListComponent', () => {
  let component: AdoptionPersonalListComponent;
  let fixture: ComponentFixture<AdoptionPersonalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionPersonalListComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionPersonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
