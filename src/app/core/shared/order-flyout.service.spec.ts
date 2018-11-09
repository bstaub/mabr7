import { TestBed } from '@angular/core/testing';

import { OrderFlyoutService } from './order-flyout.service';

describe('OrderFlyoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderFlyoutService = TestBed.get(OrderFlyoutService);
    expect(service).toBeTruthy();
  });
});
