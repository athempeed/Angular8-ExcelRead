import { TestBed } from '@angular/core/testing';

import { SalesOrderServiceService } from './sales-order-service.service';

describe('SalesOrderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesOrderServiceService = TestBed.get(SalesOrderServiceService);
    expect(service).toBeTruthy();
  });
});
