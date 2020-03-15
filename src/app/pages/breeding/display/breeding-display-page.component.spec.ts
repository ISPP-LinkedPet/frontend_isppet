import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingDisplayPageComponent } from './breeding-display-page.component';

describe('BreedingDisplayPageComponent', () => {
  let component: BreedingDisplayPageComponent;
  let fixture: ComponentFixture<BreedingDisplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingDisplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
