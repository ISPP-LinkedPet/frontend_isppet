import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPendingListComponent } from './animal-pending-list.component';

describe('AnimalPendingListComponent', () => {
  let component: AnimalPendingListComponent;
  let fixture: ComponentFixture<AnimalPendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalPendingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
