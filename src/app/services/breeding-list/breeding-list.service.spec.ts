import { TestBed } from '@angular/core/testing';

import { BreedingListService } from './breeding-list.service';

describe('BreedingListService', () => {
  let service: BreedingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
