import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BreedingListComponent} from './breeding-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('BreedingListComponent', () => {
  let component: BreedingListComponent;
  let fixture: ComponentFixture<BreedingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingListComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('BreedingListComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
