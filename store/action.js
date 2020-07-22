import { SUM, CLEAR, SUB } from './actionTypes';

export const actionSum = (expression) => ({ 
  type: SUM, 
  payload: { expression },
});

export const actionSub = (expression) => ({
  type: SUB,
  payload: { expression },
})

export const clear = () => ({
  type: CLEAR,
});
