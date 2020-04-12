import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RequestListAcceptedItemComponent} from './request-list-accepted-item.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('RequestListAcceptedItemComponent', () => {
  let component: RequestListAcceptedItemComponent;
  let fixture: ComponentFixture<RequestListAcceptedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListAcceptedItemComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListAcceptedItemComponent);
    component = fixture.componentInstance;
    component.request = { animal_photo: 'http://url1.com,http://url2.com',
                          contactData: {name: 'name'}};
    fixture.detectChanges();
  });

  it('RequestListAcceptedItemComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
