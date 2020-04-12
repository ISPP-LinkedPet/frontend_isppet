import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AnimalPendingListComponent} from './animal-pending-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('AnimalPendingListComponent', () => {
  let component: AnimalPendingListComponent;
  let fixture: ComponentFixture<AnimalPendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalPendingListComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AnimalPendingListComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
