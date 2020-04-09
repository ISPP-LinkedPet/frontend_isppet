import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AnimalFormComponent} from './animal-form.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('AnimalFormComponent', () => {
  let component: AnimalFormComponent;
  let fixture: ComponentFixture<AnimalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalFormComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AnimalFormComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
