import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {VetComponent} from './vet.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

// Checked
describe('VetComponent', () => {
  let component: VetComponent;
  let fixture: ComponentFixture<VetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('VetComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
