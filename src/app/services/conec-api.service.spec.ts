import { TestBed } from '@angular/core/testing';

import { ConecApiService } from './conec-api.service';

describe('ConecApiService', () => {
  let service: ConecApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConecApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
