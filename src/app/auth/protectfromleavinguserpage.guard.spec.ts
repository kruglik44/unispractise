import { TestBed } from '@angular/core/testing';

import { ProtectfromleavinguserpageGuard } from './protectfromleavinguserpage.guard';

describe('ProtectfromleavinguserpageGuard', () => {
  let guard: ProtectfromleavinguserpageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectfromleavinguserpageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
