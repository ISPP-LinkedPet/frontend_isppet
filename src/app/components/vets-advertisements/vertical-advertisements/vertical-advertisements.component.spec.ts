import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {VerticalAdvertisementsComponent} from './vertical-advertisements.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

// Checked
describe('VerticalAdvertisementsComponent', () => {
  let component: VerticalAdvertisementsComponent;
  let fixture: ComponentFixture<VerticalAdvertisementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalAdvertisementsComponent ],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
