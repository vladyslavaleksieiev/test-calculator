import { getResult } from '@root/store/selector';

describe('Store selectors tests', () => {
  describe('getResult selector', () => {
    it('should return return result from store', () => {
      expect(getResult({ result: 123 })).toBe(123);
    });
  });
});
