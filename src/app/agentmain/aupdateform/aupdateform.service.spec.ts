import { TestBed } from '@angular/core/testing';

import { AupdateformService } from './aupdateform.service';

describe('AupdateformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AupdateformService = TestBed.get(AupdateformService);
    expect(service).toBeTruthy();
  });
});
