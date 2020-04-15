import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNbanPageComponent } from './users-nban-page.component';

describe('UsersNbanPageComponent', () => {
  let component: UsersNbanPageComponent;
  let fixture: ComponentFixture<UsersNbanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersNbanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersNbanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
