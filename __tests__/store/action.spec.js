import {
  actionSum,
  clear,
  actionSub,
  actionRes,
  actionMul,
  actionDiv,
  reverse,
  clearMemory,
  addMemory,
  subMemory,
} from '@root/store/action';
import {
  CLEAR, SUM, SUB, MUL, DIV, RES, REVERSE, MEMORY_CLEAR, MEMORY_ADD, MEMORY_SUB,
} from '@root/store/actionTypes';

describe('Store action tests', () => {
  describe('actionSum', () => {
    it('should return action SUM', () => {
      expect(actionSum(10)).toEqual({
        type: SUM,
        payload: { expression: 10 },
      });
    });
  });

  describe('actionSub', () => {
    it('should return action SUB', () => {
      expect(actionSub(10)).toEqual({
        type: SUB,
        payload: { expression: 10 },
      });
    });
  });

  describe('actionMul', () => {
    it('should return action MUL', () => {
      expect(actionMul(10)).toEqual({
        type: MUL,
        payload: { expression: 10 },
      });
    });
  });

  describe('actionDiv', () => {
    it('should return action DIV', () => {
      expect(actionDiv(10)).toEqual({
        type: DIV,
        payload: { expression: 10 },
      });
    });
  });

  describe('clear action', () => {
    it('should return action CLEAR', () => {
      expect(clear()).toEqual({
        type: CLEAR,
      });
    });
  });

  describe('actionRes', () => {
    it('should return action RES', () => {
      expect(actionRes(10)).toEqual({
        type: RES,
        payload: { expression: 10 },
      });
    });
  });

  describe('reverse action', () => {
    it('should return action REVERSE', () => {
      expect(reverse()).toEqual({
        type: REVERSE,
      });
    });
  });

  describe('clearMemory action', () => {
    it('should return action MEMORY_CLEAR', () => {
      expect(clearMemory()).toEqual({
        type: MEMORY_CLEAR,
      });
    });
  });

  describe('addMemory action', () => {
    it('should return action MEMORY_ADD', () => {
      expect(addMemory(10)).toEqual({
        type: MEMORY_ADD,
        payload: { expression: 10 },
      });
    });
  });

  describe('subMemory action', () => {
    it('should return action MEMORY_SUB', () => {
      expect(subMemory(10)).toEqual({
        type: MEMORY_SUB,
        payload: { expression: 10 },
      });
    });
  });
});
