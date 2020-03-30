import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { VerticalLeftAdvertisementComponent } from './vertical-left-advertisement.component';
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from 'ngx-toastr';

describe('VerticalLeftAdvertisementComponent', () => {
  let component: VerticalLeftAdvertisementComponent;
  let fixture: ComponentFixture<VerticalLeftAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ VerticalLeftAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalLeftAdvertisementComponent);
    component = fixture.componentInstance;
    component.lateralAds = [{lateral_banner: 'jajaxd.jpg'}, {lateral_banner: 'joserager.jpg'}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
