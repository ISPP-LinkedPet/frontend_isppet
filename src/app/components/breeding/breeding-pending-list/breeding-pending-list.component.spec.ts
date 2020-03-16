import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingPendingListComponent } from './breeding-pending-list.component';

describe('BreedingPendingListComponent', () => {
  let component: BreedingPendingListComponent;
  let fixture: ComponentFixture<BreedingPendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingPendingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
