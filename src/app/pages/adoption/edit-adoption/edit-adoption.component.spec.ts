import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdoptionComponent } from './edit-adoption.component';

describe('EditAdoptionComponent', () => {
  let component: EditAdoptionComponent;
  let fixture: ComponentFixture<EditAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
