import { TestBed, inject } from '@angular/core/testing';

import { AuthMnService } from './auth-mn.service';

describe('AuthMnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthMnService]
    });
  });

  it('should be created', inject([AuthMnService], (service: AuthMnService) => {
    expect(service).toBeTruthy();
  }));
});
