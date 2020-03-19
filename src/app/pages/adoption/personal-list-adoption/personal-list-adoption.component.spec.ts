import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalListAdoptionComponent } from './personal-list-adoption.component';

describe('PersonalListAdoptionComponent', () => {
  let component: PersonalListAdoptionComponent;
  let fixture: ComponentFixture<PersonalListAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalListAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalListAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
