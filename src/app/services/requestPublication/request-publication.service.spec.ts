import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RequestPublicationService } from './request-publication.service';
import { RouterTestingModule } from "@angular/router/testing";

describe('RequestPublicationService', () => {
  let service: RequestPublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    service = TestBed.inject(RequestPublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

