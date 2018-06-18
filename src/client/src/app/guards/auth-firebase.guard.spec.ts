import { TestBed, async, inject } from '@angular/core/testing';

import { AuthFirebaseGuard } from './auth-firebase.guard';

describe('AuthFirebaseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthFirebaseGuard]
    });
  });

  it('should ...', inject([AuthFirebaseGuard], (guard: AuthFirebaseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
