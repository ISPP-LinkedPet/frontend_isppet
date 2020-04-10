import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPersonalAdsComponent } from './all-personal-ads.component';

describe('AllPersonalAdsComponent', () => {
  let component: AllPersonalAdsComponent;
  let fixture: ComponentFixture<AllPersonalAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPersonalAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPersonalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
