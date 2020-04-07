import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingAnimalFormComponent } from './breeding-animal-form.component';

describe('BreedingAnimalFormComponent', () => {
  let component: BreedingAnimalFormComponent;
  let fixture: ComponentFixture<BreedingAnimalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingAnimalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
