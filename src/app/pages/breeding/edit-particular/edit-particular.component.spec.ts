import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParticularComponent } from './edit-particular.component';

describe('EditParticularComponent', () => {
  let component: EditParticularComponent;
  let fixture: ComponentFixture<EditParticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
