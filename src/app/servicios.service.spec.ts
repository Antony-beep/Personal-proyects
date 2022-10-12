import { TestBed } from '@angular/core/testing';

import { DataService } from './servicios/data.service';

describe('ServiciosService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
