import { TestBed } from '@angular/core/testing';

import { ProtectfromleavingGuard } from './protectfromleaving.guard';

describe('ProtectfromleavingGuard', () => {
  let guard: ProtectfromleavingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectfromleavingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
