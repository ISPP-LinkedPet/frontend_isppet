import { TestBed } from '@angular/core/testing';

import { RequestPublicationService } from './request-publication.service';

describe('RequestPublicationService', () => {
  let service: RequestPublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestPublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
