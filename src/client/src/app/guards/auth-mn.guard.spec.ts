import { TestBed, async, inject } from '@angular/core/testing';

import { AuthMnGuard } from './auth-mn.guard';

describe('AuthMnGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthMnGuard]
    });
  });

  it('should ...', inject([AuthMnGuard], (guard: AuthMnGuard) => {
    expect(guard).toBeTruthy();
  }));
});
