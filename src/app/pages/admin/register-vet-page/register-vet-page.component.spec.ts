import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVetPageComponent } from './register-vet-page.component';

describe('RegisterVetPageComponent', () => {
  let component: RegisterVetPageComponent;
  let fixture: ComponentFixture<RegisterVetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
