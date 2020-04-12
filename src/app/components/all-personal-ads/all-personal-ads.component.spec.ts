import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AllPersonalAdsComponent} from './all-personal-ads.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// Checked
describe('AllPersonalAdsComponent', () => {
  let component: AllPersonalAdsComponent;
  let fixture: ComponentFixture<AllPersonalAdsComponent>;

  TestBed.configureTestingModule({
    declarations: [ AllPersonalAdsComponent ],
    providers: [ HttpClient, HttpHandler, ToastrModule.forRoot() ],
    imports: [ RouterTestingModule, HttpClientTestingModule ]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPersonalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
