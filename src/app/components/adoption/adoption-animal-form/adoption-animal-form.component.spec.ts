import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionAnimalFormComponent } from './adoption-animal-form.component';

describe('AdoptionAnimalFormComponent', () => {
  let component: AdoptionAnimalFormComponent;
  let fixture: ComponentFixture<AdoptionAnimalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionAnimalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
