import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListAcceptedComponent } from './request-list-accepted.component';

describe('RequestListAcceptedComponent', () => {
  let component: RequestListAcceptedComponent;
  let fixture: ComponentFixture<RequestListAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
