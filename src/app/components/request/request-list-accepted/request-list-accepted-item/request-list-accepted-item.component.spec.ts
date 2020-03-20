import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListAcceptedItemComponent } from './request-list-accepted-item.component';

describe('RequestListAcceptedItemComponent', () => {
  let component: RequestListAcceptedItemComponent;
  let fixture: ComponentFixture<RequestListAcceptedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListAcceptedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListAcceptedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
