import {
  SUM, CLEAR, SUB, RES, MUL, DIV, REVERSE,
} from './actionTypes';

export const actionSum = (expression) => ({
  type: SUM,
  payload: { expression },
});

export const actionSub = (expression) => ({
  type: SUB,
  payload: { expression },
});

export const actionRes = (expression) => ({
  type: RES,
  payload: { expression },
});

export const actionMul = (expression) => ({
  type: MUL,
  payload: { expression },
});

export const actionDiv = (expression) => ({
  type: DIV,
  payload: { expression },
});

export const clear = () => ({
  type: CLEAR,
});

export const reverse = () => ({
  type: REVERSE,
});
