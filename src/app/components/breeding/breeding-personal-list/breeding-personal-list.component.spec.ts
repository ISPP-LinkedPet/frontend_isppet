import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingPersonalListComponent } from './breeding-personal-list.component';

describe('BreedingPersonalListComponent', () => {
  let component: BreedingPersonalListComponent;
  let fixture: ComponentFixture<BreedingPersonalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingPersonalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingPersonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
