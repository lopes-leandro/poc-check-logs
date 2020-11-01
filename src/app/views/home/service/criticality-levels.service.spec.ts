import { TestBed } from '@angular/core/testing';

import { CriticalityLevelsService } from './criticality-levels.service';

describe('CriticalityLevelsService', () => {
  let service: CriticalityLevelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriticalityLevelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
