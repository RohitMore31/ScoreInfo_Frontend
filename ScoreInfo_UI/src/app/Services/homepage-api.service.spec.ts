import { TestBed } from '@angular/core/testing';

import { HomepageAPIService } from './homepage-api.service';

describe('HomepageAPIService', () => {
  let service: HomepageAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
