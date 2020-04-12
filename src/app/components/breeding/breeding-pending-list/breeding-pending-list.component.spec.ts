import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BreedingPendingListComponent} from './breeding-pending-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('BreedingPendingListComponent', () => {
  let component: BreedingPendingListComponent;
  let fixture: ComponentFixture<BreedingPendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingPendingListComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
