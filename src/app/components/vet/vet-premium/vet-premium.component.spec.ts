import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetPremiumComponent } from './vet-premium.component';

describe('VetPremiumComponent', () => {
  let component: VetPremiumComponent;
  let fixture: ComponentFixture<VetPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
