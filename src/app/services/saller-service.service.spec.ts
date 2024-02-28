import { TestBed } from '@angular/core/testing';

import { SallerServiceService } from './saller-service.service';

describe('SallerServiceService', () => {
  let service: SallerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SallerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
