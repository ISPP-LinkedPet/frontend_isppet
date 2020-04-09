import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalAdvertisementsComponent } from './vertical-advertisements.component';

describe('VerticalAdvertisementsComponent', () => {
  let component: VerticalAdvertisementsComponent;
  let fixture: ComponentFixture<VerticalAdvertisementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalAdvertisementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
