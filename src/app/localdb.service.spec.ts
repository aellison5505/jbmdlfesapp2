/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocaldbService } from './localdb.service';

describe('LocaldbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocaldbService]
    });
  });

  it('should ...', inject([LocaldbService], (service: LocaldbService) => {
    expect(service).toBeTruthy();
  }));
});
