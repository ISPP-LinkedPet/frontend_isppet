import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StatisticsComponent} from './statistics.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  TestBed.configureTestingModule({
    declarations: [ StatisticsComponent ],
    providers: [ HttpClient, HttpHandler ],
    imports: [ RouterTestingModule,HttpClientTestingModule ]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
