import { TestBed, inject } from '@angular/core/testing';

import { PaypalService } from './paypal.service';

describe('PaypalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaypalService]
    });
  });

  it('should be created', inject([PaypalService], (service: PaypalService) => {
    expect(service).toBeTruthy();
  }));
});
