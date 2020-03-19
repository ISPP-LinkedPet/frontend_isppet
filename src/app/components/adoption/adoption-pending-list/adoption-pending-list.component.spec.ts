import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionPendingListComponent } from './adoption-pending-list.component';

describe('AdoptionPendingListComponent', () => {
  let component: AdoptionPendingListComponent;
  let fixture: ComponentFixture<AdoptionPendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionPendingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
