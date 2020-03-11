import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionListPageComponent } from './adoption-list-page.component';

describe('AdoptionListPageComponent', () => {
  let component: AdoptionListPageComponent;
  let fixture: ComponentFixture<AdoptionListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
