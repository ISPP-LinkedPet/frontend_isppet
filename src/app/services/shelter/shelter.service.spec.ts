import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ShelterService } from './shelter.service';
import { RouterTestingModule } from "@angular/router/testing";

describe('ShelterService', () => {
  let service: ShelterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    service = TestBed.inject(ShelterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});