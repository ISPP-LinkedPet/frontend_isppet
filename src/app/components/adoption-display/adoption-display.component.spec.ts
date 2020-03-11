import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionDisplayComponent } from './adoption-display.component';

describe('AdoptionDisplayComponent', () => {
  let component: AdoptionDisplayComponent;
  let fixture: ComponentFixture<AdoptionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
