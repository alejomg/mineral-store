import { TestBed, inject } from '@angular/core/testing';

import { MineralService } from './mineral.service';

describe('MineralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MineralService]
    });
  });

  it('should be created', inject([MineralService], (service: MineralService) => {
    expect(service).toBeTruthy();
  }));
});
