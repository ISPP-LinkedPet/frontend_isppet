import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingCreateComponent } from './breeding-form.component';

describe('BreedingCreateComponent', () => {
  let component: BreedingCreateComponent;
  let fixture: ComponentFixture<BreedingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
