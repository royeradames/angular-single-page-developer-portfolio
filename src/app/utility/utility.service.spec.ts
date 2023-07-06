import { TestBed } from '@angular/core/testing';
import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  let service: UtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('labelToId', () => {
    it('should convert a label to an id', () => {
      const label = 'Test Label';
      const expectedId = 'test-label';
      expect(service.labelToId(label)).toEqual(expectedId);
    });

    it('should handle labels with multiple spaces', () => {
      const label = 'Test  Label   With   Spaces';
      const expectedId = 'test-label-with-spaces';
      expect(service.labelToId(label)).toEqual(expectedId);
    });

    it('should handle empty labels', () => {
      const label = '';
      const expectedId = '';
      expect(service.labelToId(label)).toEqual(expectedId);
    });
  });
});
