import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingPendingListPageComponent } from './breeding-pending-list-page.component';

describe('BreedingPendingListPageComponent', () => {
  let component: BreedingPendingListPageComponent;
  let fixture: ComponentFixture<BreedingPendingListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingPendingListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingPendingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
