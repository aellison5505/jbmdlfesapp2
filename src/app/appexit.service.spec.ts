/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppexitService } from './appexit.service';

describe('AppexitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppexitService]
    });
  });

  it('should ...', inject([AppexitService], (service: AppexitService) => {
    expect(service).toBeTruthy();
  }));
});
