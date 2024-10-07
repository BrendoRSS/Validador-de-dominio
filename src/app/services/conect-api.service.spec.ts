import { TestBed } from '@angular/core/testing';

import { ConectApiService } from './conect-api.service';

describe('ConectApiService', () => {
  let service: ConectApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
