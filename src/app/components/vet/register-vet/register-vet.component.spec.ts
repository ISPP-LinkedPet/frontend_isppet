import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVetComponent } from './register-vet.component';

describe('RegisterVetComponent', () => {
  let component: RegisterVetComponent;
  let fixture: ComponentFixture<RegisterVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
