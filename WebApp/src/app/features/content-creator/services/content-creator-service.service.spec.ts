import { TestBed } from '@angular/core/testing';

import { ContentCreatorService } from './content-creator-service.service';

describe('ContentCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentCreatorService = TestBed.get(ContentCreatorService);
    expect(service).toBeTruthy();
  });
});
