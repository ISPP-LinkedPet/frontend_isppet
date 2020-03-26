import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionPendingListPageComponent } from './adoption-pending-list-page.component';

describe('AdoptionPendingListPageComponent', () => {
  let component: AdoptionPendingListPageComponent;
  let fixture: ComponentFixture<AdoptionPendingListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionPendingListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionPendingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
