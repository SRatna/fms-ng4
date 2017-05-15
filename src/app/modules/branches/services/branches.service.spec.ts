import { TestBed, inject } from '@angular/core/testing';

import { BranchesService } from './branches.service';

describe('BranchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BranchesService]
    });
  });

  it('should be created', inject([BranchesService], (service: BranchesService) => {
    expect(service).toBeTruthy();
  }));
});
