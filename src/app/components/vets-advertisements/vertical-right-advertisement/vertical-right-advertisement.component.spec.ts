import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { VerticalRightAdvertisementComponent } from './vertical-right-advertisement.component';
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from 'ngx-toastr';

describe('VerticalRightAdvertisementComponent', () => {
  let component: VerticalRightAdvertisementComponent;
  let fixture: ComponentFixture<VerticalRightAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ VerticalRightAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalRightAdvertisementComponent);
    component = fixture.componentInstance;
    component.lateralAds = [{lateral_banner: 'jajaxd.jpg'}, {lateral_banner: 'joserager.jpg'}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
