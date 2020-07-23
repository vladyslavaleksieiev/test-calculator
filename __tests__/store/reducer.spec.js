const { reducer } = require('@root/store/reducer');
const { ACTIONS } = require('@root/constants');
const {
  CLEAR, SUM, SUB, MUL, DIV, RES, REVERSE, MEMORY_CLEAR, MEMORY_ADD, MEMORY_SUB,
} = require('@root/store/actionTypes');

describe('Store reducer tests', () => {
  describe('Untracked action type', () => {
    it('should return state without changes', () => {
      expect(reducer({}, {})).toEqual({});
    });

    it('should return initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        result: 0,
        action: null,
        memory: 0,
      });
    });
  });

  describe('CLEAR action type', () => {
    it('should return state with initial resuly and action', () => {
      const state = {
        result: 123,
        action: ACTIONS.DIV,
        memory: 123,
      };

      const action = { type: CLEAR };

      expect(reducer(state, action)).toEqual({
        result: 0,
        action: null,
        memory: 123,
      });
    });
  });

  describe('SUM/SUB/MUL/DIV action type', () => {
    it('should return state with new action and result', () => {
      const store = {
        result: 0,
        action: null,
      };

      const action = {
        type: SUB,
        payload: { expression: 10 },
      };

      expect(reducer(store, action)).toEqual({
        result: 10,
        action: ACTIONS.SUB,
      });
    });
  });

  describe('SUM action type', () => {
    const state = {
      result: 100,
      action: ACTIONS.DIV,
    };

    const action = {
      type: SUM,
      payload: { expression: 10 },
    };

    const reducerResult = reducer(state, action);

    it('should return state with result (prev action should be applied)', () => {
      expect(reducerResult.result).toBe(10);
    });
    it('should return state with new action', () => {
      expect(reducerResult.action).toBe(ACTIONS.SUM);
    });
  });

  describe('SUB action type', () => {
    const state = {
      result: 100,
      action: ACTIONS.SUM,
    };

    const action = {
      type: SUB,
      payload: { expression: 10 },
    };

    const reducerResult = reducer(state, action);

    it('should return state with result (prev action should be applied)', () => {
      expect(reducerResult.result).toBe(110);
    });
    it('should return state with new action', () => {
      expect(reducerResult.action).toBe(ACTIONS.SUB);
    });
  });

  describe('MUL action type', () => {
    const state = {
      result: 100,
      action: ACTIONS.SUB,
    };

    const action = {
      type: MUL,
      payload: { expression: 10 },
    };

    const reducerResult = reducer(state, action);

    it('should return state with result (prev action should be applied)', () => {
      expect(reducerResult.result).toBe(90);
    });
    it('should return state with new action', () => {
      expect(reducerResult.action).toBe(ACTIONS.MUL);
    });
  });

  describe('DIV action type', () => {
    const state = {
      result: 100,
      action: ACTIONS.MUL,
    };

    const action = {
      type: DIV,
      payload: { expression: 10 },
    };

    const reducerResult = reducer(state, action);

    it('should return state with result (prev action should be applied)', () => {
      expect(reducerResult.result).toBe(1000);
    });
    it('should return state with new action', () => {
      expect(reducerResult.action).toBe(ACTIONS.DIV);
    });
  });

  describe('RES action type', () => {
    const state = {
      result: 100,
      action: ACTIONS.SUM,
    };

    const action = {
      type: RES,
      payload: { expression: 10 },
    };

    const reducerResult = reducer(state, action);

    it('should return state with result (prev action should be applied)', () => {
      expect(reducerResult.result).toBe(110);
    });
    it('should return state without changing action', () => {
      expect(reducerResult.action).toBe(ACTIONS.SUM);
    });
  });

  describe('REVERSE action type', () => {
    it('should return state with reversed result', () => {
      const state = { result: 100 };
      const action = { type: REVERSE };

      expect(reducer(state, action)).toEqual({ result: -100 });
    });
  });

  describe('MEMORY_CLEAR action type', () => {
    it('should return state with initial memory value', () => {
      const state = {
        result: 123,
        action: ACTIONS.DIV,
        memory: 123,
      };

      const action = { type: MEMORY_CLEAR };

      expect(reducer(state, action)).toEqual({
        result: 123,
        action: ACTIONS.DIV,
        memory: 0,
      });
    });
  });

  describe('MEMORY_ADD action type', () => {
    it('should return state with new memory value (should sum expression)', () => {
      const state = {
        memory: 100,
      };

      const action = {
        type: MEMORY_ADD,
        payload: { expression: 10 },
      };

      expect(reducer(state, action)).toEqual({ memory: 110 });
    });
  });

  describe('MEMORY_SUB action type', () => {
    it('should return state with new memory value (should sub expression)', () => {
      const state = {
        memory: 100,
      };

      const action = {
        type: MEMORY_SUB,
        payload: { expression: 10 },
      };

      expect(reducer(state, action)).toEqual({ memory: 90 });
    });
  });
});
