import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BreedingCreateComponent} from './breeding-form.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('BreedingCreateComponent', () => {
  let component: BreedingCreateComponent;
  let fixture: ComponentFixture<BreedingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingCreateComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
