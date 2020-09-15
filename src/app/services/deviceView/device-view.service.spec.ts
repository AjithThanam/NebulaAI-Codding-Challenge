import { TestBed } from '@angular/core/testing';

import { DeviceViewService } from './device-view.service';

describe('DeviceViewService', () => {
  let service: DeviceViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
