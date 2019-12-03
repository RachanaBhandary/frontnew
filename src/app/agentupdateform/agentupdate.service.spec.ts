import { TestBed } from '@angular/core/testing';

import { AgentupdateService } from './agentupdate.service';

describe('AgentupdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentupdateService = TestBed.get(AgentupdateService);
    expect(service).toBeTruthy();
  });
});
