import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalAdvertisementComponent } from './horizontal-advertisement.component';

describe('HorizontalAdvertisementComponent', () => {
  let component: HorizontalAdvertisementComponent;
  let fixture: ComponentFixture<HorizontalAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
