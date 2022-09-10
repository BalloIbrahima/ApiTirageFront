import { TestBed } from '@angular/core/testing';

import { DetailslisteService } from './detailsliste.service';

describe('DetailslisteService', () => {
  let service: DetailslisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailslisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
