/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BldgtransportService } from './bldgtransport.service';

describe('BldgtransportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BldgtransportService]
    });
  });

  it('should ...', inject([BldgtransportService], (service: BldgtransportService) => {
    expect(service).toBeTruthy();
  }));
});
