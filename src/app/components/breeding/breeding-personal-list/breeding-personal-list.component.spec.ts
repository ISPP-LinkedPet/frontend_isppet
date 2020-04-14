import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BreedingPersonalListComponent} from './breeding-personal-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('BreedingPersonalListComponent', () => {
  let component: BreedingPersonalListComponent;
  let fixture: ComponentFixture<BreedingPersonalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingPersonalListComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingPersonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
