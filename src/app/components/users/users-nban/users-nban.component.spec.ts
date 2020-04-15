import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNbanComponent } from './users-nban.component';

describe('UsersNbanComponent', () => {
  let component: UsersNbanComponent;
  let fixture: ComponentFixture<UsersNbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersNbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersNbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
