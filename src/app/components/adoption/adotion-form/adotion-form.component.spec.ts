import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdotionFormComponent } from './adotion-form.component';

describe('AdotionFormComponent', () => {
  let component: AdotionFormComponent;
  let fixture: ComponentFixture<AdotionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdotionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdotionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
