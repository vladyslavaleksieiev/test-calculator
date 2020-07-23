import { getResult, getMemory } from '@root/store/selector';

describe('Store selectors tests', () => {
  describe('getResult selector', () => {
    it('should return return result from store', () => {
      expect(getResult({ result: 123 })).toBe(123);
    });
  });
  describe('getMemory selector', () => {
    it('should return return result from store', () => {
      expect(getMemory({ memory: 123 })).toBe(123);
    });
  });
});
