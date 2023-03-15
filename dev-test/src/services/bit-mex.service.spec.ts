import { TestBed } from '@angular/core/testing';

import { BitMexService } from './bit-mex.service';

describe('BitMexService', () => {
  let service: BitMexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitMexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
