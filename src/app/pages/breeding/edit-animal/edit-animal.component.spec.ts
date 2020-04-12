import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EditAnimalComponent} from './edit-animal.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('EditAnimalComponent', () => {
  let component: EditAnimalComponent;
  let fixture: ComponentFixture<EditAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnimalComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('EditAnimalComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
