import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetEditPageComponent } from './vet-edit-page.component';

describe('VetEditPageComponent', () => {
  let component: VetEditPageComponent;
  let fixture: ComponentFixture<VetEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
