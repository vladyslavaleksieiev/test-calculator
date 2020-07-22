import {
  SUM, SUB, CLEAR, RES, MUL, DIV, REVERSE,
} from './actionTypes';
import { ACTIONS } from '../constants';

const initialState = {
  result: 0,
  action: null,
  memory: 0,
};

const calc = (state, expression) => {
  const { result, action } = state;
  switch (action) {
    case ACTIONS.SUM:
      return result + expression;
    case ACTIONS.SUB:
      return result - expression;
    case ACTIONS.MUL:
      return result * expression;
    case ACTIONS.DIV:
      return result / expression;
    default:
      return result + expression;
  }
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CLEAR:
      return {
        ...initialState,
      };
    case SUM:
      return {
        ...state,
        result: calc(state, payload.expression),
        action: ACTIONS.SUM,
      };
    case SUB:
      return {
        ...state,
        result: calc(state, payload.expression),
        action: ACTIONS.SUB,
      };
    case RES:
      return {
        ...state,
        result: calc(state, payload.expression),
      };
    case MUL:
      return {
        ...state,
        result: calc(state, payload.expression),
        action: ACTIONS.MUL,
      };
    case DIV:
      return {
        ...state,
        result: calc(state, payload.expression),
        action: ACTIONS.DIV,
      };
    case REVERSE:
      return {
        ...state,
        result: state.result * -1,
      };
    default:
      return state;
  }
};
