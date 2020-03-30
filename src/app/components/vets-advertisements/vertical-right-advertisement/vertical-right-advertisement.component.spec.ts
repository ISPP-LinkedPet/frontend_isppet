import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalRightAdvertisementComponent } from './vertical-right-advertisement.component';

describe('VerticalRightAdvertisementComponent', () => {
  let component: VerticalRightAdvertisementComponent;
  let fixture: ComponentFixture<VerticalRightAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalRightAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalRightAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
