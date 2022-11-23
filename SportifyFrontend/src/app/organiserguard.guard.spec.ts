import { TestBed } from '@angular/core/testing';

import { OrganiserguardGuard } from './organiserguard.guard';

describe('OrganiserguardGuard', () => {
  let guard: OrganiserguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrganiserguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
