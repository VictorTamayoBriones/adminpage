import { TestBed } from '@angular/core/testing';

import { PrimeraEtapaService } from './primera-etapa.service';

describe('PrimeraEtapaService', () => {
  let service: PrimeraEtapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeraEtapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
