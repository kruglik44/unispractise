import { TestBed } from '@angular/core/testing';

import { ProtectfromleavingprojectsguardGuard } from './protectfromleavingprojectsguard.guard';

describe('ProtectfromleavingprojectsguardGuard', () => {
  let guard: ProtectfromleavingprojectsguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectfromleavingprojectsguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
