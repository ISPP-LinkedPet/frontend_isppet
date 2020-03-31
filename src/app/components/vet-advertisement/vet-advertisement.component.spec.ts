import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { VetAdvertisementComponent } from './vet-advertisement.component';
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from 'ngx-toastr';

describe('VetAdvertisementComponent', () => {
  let component: VetAdvertisementComponent;
  let fixture: ComponentFixture<VetAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ToastrModule.forRoot()],
      declarations: [ VetAdvertisementComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetAdvertisementComponent);
    component = fixture.componentInstance;
    component.lateralAds = [{lateral_banner: 'jajaxd.jpg'}, {lateral_banner: 'joserager.jpg'}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
