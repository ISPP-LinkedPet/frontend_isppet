import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAllPersonalAdsComponent } from './page-all-personal-ads.component';

describe('PageAllPersonalAdsComponent', () => {
  let component: PageAllPersonalAdsComponent;
  let fixture: ComponentFixture<PageAllPersonalAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAllPersonalAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAllPersonalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
