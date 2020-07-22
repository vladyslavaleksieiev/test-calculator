import { SUM, SUB, CLEAR, RES } from './actionTypes';
import { ACTIONS } from '../constants';

const initialState = {
  result: 0,
  action: null,
};

const calc = (state, expression) => {
  const { result, action } = state;
  switch (action) {
    case ACTIONS.SUM:
      return result + expression;
    case ACTIONS.SUB:
      return result - expression;
    case ACTIONS.RES:
      return expression;
    default:
      return result + expression;
  }
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CLEAR:
      return {
        ...initialState,
      };
    case SUM:
      return {
        result: calc(state, payload.expression),
        action: ACTIONS.SUM,
      };
    case SUB:
      return {
        result: calc(state, payload.expression),
        action: ACTIONS.SUB,
      };
    case RES:
      return {
        result: calc(state, payload.expression),
        action: ACTIONS.RES,
      }
    default:
      return state;
  }
};
