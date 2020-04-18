import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BreedingAnimalFormComponent} from './breeding-animal-form.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('BreedingAnimalFormComponent', () => {
  let component: BreedingAnimalFormComponent;
  let fixture: ComponentFixture<BreedingAnimalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingAnimalFormComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
