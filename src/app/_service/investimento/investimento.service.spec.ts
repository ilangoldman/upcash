import { TestBed, inject } from '@angular/core/testing';

import { InvestimentoService } from './investimento.service';

describe('InvestimentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestimentoService]
    });
  });

  it('should be created', inject([InvestimentoService], (service: InvestimentoService) => {
    expect(service).toBeTruthy();
  }));
});
