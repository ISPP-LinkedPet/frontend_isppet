import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalLeftAdvertisementComponent } from './vertical-left-advertisement.component';

describe('VerticalLeftAdvertisementComponent', () => {
  let component: VerticalLeftAdvertisementComponent;
  let fixture: ComponentFixture<VerticalLeftAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalLeftAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalLeftAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
