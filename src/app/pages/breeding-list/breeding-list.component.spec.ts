import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingListComponent } from './breeding-list.component';

describe('BreedingListComponent', () => {
  let component: BreedingListComponent;
  let fixture: ComponentFixture<BreedingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingListComponent ]
    })
    
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
