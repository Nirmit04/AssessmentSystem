import { TestBed } from '@angular/core/testing';

import { ContentCreatorServiceService } from './content-creator-service.service';

describe('ContentCreatorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentCreatorServiceService = TestBed.get(ContentCreatorServiceService);
    expect(service).toBeTruthy();
  });
});
