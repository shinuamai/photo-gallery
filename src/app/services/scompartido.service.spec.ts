import { TestBed } from '@angular/core/testing';
import { ScompartidoService } from './scompartido.service';

describe('ScompartidoService', () => {
  let service: ScompartidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScompartidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
