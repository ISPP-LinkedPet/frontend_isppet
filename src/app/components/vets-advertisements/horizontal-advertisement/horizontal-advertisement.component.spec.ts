import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HorizontalAdvertisementComponent } from './horizontal-advertisement.component';
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from 'ngx-toastr';

describe('HorizontalAdvertisementComponent', () => {
  let component: HorizontalAdvertisementComponent;
  let fixture: ComponentFixture<HorizontalAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ HorizontalAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
