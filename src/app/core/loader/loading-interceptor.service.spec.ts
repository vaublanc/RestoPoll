import { TestBed } from '@angular/core/testing';

import { LoadingInterceptorService } from './loading-interceptor.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingInterceptorService = TestBed.get(LoadingInterceptorService);
    expect(service).toBeTruthy();
  });
});
