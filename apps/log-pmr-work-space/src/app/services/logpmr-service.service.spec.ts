import { TestBed } from '@angular/core/testing';

import { LogpmrServiceService } from './logpmr-service.service';

describe('LogpmrServiceService', () => {
  let service: LogpmrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogpmrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
