import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionPersonalListComponent } from './adoption-personal-list.component';

describe('AdoptionPersonalListComponent', () => {
  let component: AdoptionPersonalListComponent;
  let fixture: ComponentFixture<AdoptionPersonalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionPersonalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionPersonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
