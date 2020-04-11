import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import {AllPersonalAdsComponent} from '../../all-personal-ads/all-personal-ads.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  TestBed.configureTestingModule({
    declarations: [ StatisticsComponent ],
    providers: [ HttpClient, HttpHandler ],
    imports: [ RouterTestingModule ]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
