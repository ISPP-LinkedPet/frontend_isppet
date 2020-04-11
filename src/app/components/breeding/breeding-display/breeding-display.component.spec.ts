import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BreedingDisplayComponent} from './breeding-display.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

// Checked
describe('BreedingDisplayComponent', () => {
  let component: BreedingDisplayComponent;
  let fixture: ComponentFixture<BreedingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingDisplayComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
