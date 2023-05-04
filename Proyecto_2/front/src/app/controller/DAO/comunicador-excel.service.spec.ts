import { TestBed } from '@angular/core/testing';

import { ComunicadorExcelService } from './comunicador-excel.service';

describe('ComunicadorExcelService', () => {
  let service: ComunicadorExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicadorExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
