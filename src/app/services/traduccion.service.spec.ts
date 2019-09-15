import { TestBed } from '@angular/core/testing';

import { TraduccionService } from './traduccion.service';

describe('TraduccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraduccionService = TestBed.get(TraduccionService);
    expect(service).toBeTruthy();
  });
});
