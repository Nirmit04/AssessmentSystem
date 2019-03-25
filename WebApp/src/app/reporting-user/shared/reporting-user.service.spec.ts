import { TestBed } from '@angular/core/testing';

import { ReportingUserService } from './reporting-user.service';

describe('ReportingUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportingUserService = TestBed.get(ReportingUserService);
    expect(service).toBeTruthy();
  });
});
