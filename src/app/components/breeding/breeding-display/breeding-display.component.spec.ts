import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingDisplayComponent } from './breeding-display.component';

describe('BreedingDisplayComponent', () => {
  let component: BreedingDisplayComponent;
  let fixture: ComponentFixture<BreedingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
