import { TestBed } from '@angular/core/testing';

import { TestAdminService } from './test-admin.service';

describe('TestAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestAdminService = TestBed.get(TestAdminService);
    expect(service).toBeTruthy();
  });
});
