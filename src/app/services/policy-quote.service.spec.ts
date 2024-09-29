import { TestBed } from '@angular/core/testing';

import { PolicyQuoteService } from './policy-quote.service';

describe('PolicyQuoteService', () => {
  let service: PolicyQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
