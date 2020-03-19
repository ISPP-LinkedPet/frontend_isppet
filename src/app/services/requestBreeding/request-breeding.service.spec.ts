import { TestBed } from '@angular/core/testing';

import { RequestBreedingService } from './request-breeding.service';

describe('RequestBreedingService', () => {
  let service: RequestBreedingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestBreedingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
