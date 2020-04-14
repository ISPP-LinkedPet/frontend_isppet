import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsEditPageComponent } from './ads-edit-page.component';

describe('AdsEditPageComponent', () => {
  let component: AdsEditPageComponent;
  let fixture: ComponentFixture<AdsEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
