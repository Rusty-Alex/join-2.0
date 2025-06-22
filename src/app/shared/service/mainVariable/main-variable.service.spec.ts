import { TestBed } from '@angular/core/testing';

import { MainVariableService } from './main-variable.service';

describe('MainVariableService', () => {
  let service: MainVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
