import { TestBed } from '@angular/core/testing';

import { IsTeamleadGuard } from './is-teamlead.guard';

describe('IsTeamleadGuard', () => {
  let guard: IsTeamleadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsTeamleadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
