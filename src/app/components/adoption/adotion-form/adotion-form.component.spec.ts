import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdotionFormComponent} from './adotion-form.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ConfigService} from '../../../services/config/config.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('AdotionFormComponent', () => {
  let component: AdotionFormComponent;
  let fixture: ComponentFixture<AdotionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdotionFormComponent ],
      providers: [ HttpClient, HttpHandler, ConfigService ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdotionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AdoptionFormComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
