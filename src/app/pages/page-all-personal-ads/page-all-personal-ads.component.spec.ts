import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PageAllPersonalAdsComponent} from './page-all-personal-ads.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

// Checked
describe('PageAllPersonalAdsComponent', () => {
  let component: PageAllPersonalAdsComponent;
  let fixture: ComponentFixture<PageAllPersonalAdsComponent>;

  TestBed.configureTestingModule({
    declarations: [ PageAllPersonalAdsComponent ],
    providers: [ HttpClient, HttpHandler ],
    imports: [ RouterTestingModule ]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAllPersonalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
