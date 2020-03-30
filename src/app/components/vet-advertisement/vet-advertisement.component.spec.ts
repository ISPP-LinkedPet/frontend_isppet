import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetAdvertisementComponent } from './vet-advertisement.component';

describe('VetAdvertisementComponent', () => {
  let component: VetAdvertisementComponent;
  let fixture: ComponentFixture<VetAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
