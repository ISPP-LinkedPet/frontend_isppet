import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingListPageComponent } from './breeding-list-page.component';

describe('BreedingListPageComponent', () => {
  let component: BreedingListPageComponent;
  let fixture: ComponentFixture<BreedingListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
