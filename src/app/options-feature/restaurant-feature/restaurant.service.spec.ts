import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './shared/restaurant.service';

describe('RestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantService = TestBed.get(RestaurantService);
    expect(service).toBeTruthy();
  });
});
