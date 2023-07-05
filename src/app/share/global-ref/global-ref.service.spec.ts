import { TestBed } from '@angular/core/testing';

import { GlobalRefService } from './global-ref.service';

describe('GlobalRefService', () => {
  let service: GlobalRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
