import { TestBed } from '@angular/core/testing';

import { APIclientService } from './apiclient.service';

describe('APIclientService', () => {
  let service: APIclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
