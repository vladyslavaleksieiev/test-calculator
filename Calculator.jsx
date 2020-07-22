import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Output, Memory } from './components';
import { BUTTON_TYPES, MAX_FORMULA_LENGTH, ACTIONS } from './constants';
import { getResult, getMemory } from './store/selector';
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
} from './store/action';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: Dimensions.get('window').width * 0.08,
  },

  row: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: Dimensions.get('window').width * 0.04,
  },
});

export const Calculator = () => {
  const dispatch = useDispatch();
  const result = useSelector(getResult);
  const memory = useSelector(getMemory);
  const [isCalcPaused, setCalcPaused] = useState(false);
  const [isCalcProcessing, setCalcProcessing] = useState(false);
  const [prevAction, setPrevAction] = useState();
  const [formula, setFormula] = useState('');

  const appendDot = () => {
    if (formula.indexOf('.') === -1 && formula.length < MAX_FORMULA_LENGTH) {
      setFormula(`${formula}.`);
    }
  };

  const addDigit = (digit) => () => {
    setCalcProcessing(true);
    if (isCalcPaused) {
      setCalcPaused(false);
      dispatch(clear());
    }
    if (formula.length < MAX_FORMULA_LENGTH) {
      if (formula === '0') {
        setFormula(digit);
      } else {
        setFormula(`${formula}${digit}`);
      }
    }
  };

  const getDefaultFormula = useCallback(() => (
    (prevAction === ACTIONS.DIV || prevAction === ACTIONS.MUL) ? 1 : 0
  ), [prevAction]);

  const pressSum = useCallback(() => {
    setCalcPaused(false);
    dispatch(actionSum(parseFloat(formula || getDefaultFormula())));
    setFormula('');
    setPrevAction(ACTIONS.SUM);
  }, [formula]);

  const pressSub = useCallback(() => {
    setCalcPaused(false);
    dispatch(actionSub(parseFloat(formula || getDefaultFormula())));
    setFormula('');
    setPrevAction(ACTIONS.SUB);
  }, [formula]);

  const pressMul = useCallback(() => {
    setCalcPaused(false);
    dispatch(actionMul(parseFloat(formula || 1)));
    setFormula('');
    setPrevAction(ACTIONS.MUL);
  }, [formula]);

  const pressDiv = useCallback(() => {
    setCalcPaused(false);
    dispatch(actionDiv(parseFloat(formula || 1)));
    setFormula('');
    setPrevAction(ACTIONS.DIV);
  }, [formula]);

  const pressRes = useCallback(() => {
    setCalcPaused(true);
    dispatch(actionRes(parseFloat(formula || getDefaultFormula())));
    setFormula('');
  }, [formula]);

  const pressClear = useCallback(() => {
    if (isCalcProcessing) {
      setCalcProcessing(false);
      setFormula('');
    } else {
      dispatch(clear());
    }
    setFormula('');
  }, [isCalcProcessing]);

  const pressMR = useCallback(() => {
    setCalcProcessing(true);
    setFormula(memory.toString());
  }, [memory]);

  const pressMC = useCallback(() => {
    dispatch(clearMemory());
  }, []);

  const pressMAdd = useCallback(() => {
    dispatch(addMemory(formula || result));
  }, [formula, result]);

  const pressMSub = useCallback(() => {
    dispatch(subMemory(formula || result));
  }, [formula, result]);

  const pressPlusMinus = useCallback(() => {
    if (formula) {
      setFormula(parseFloat(formula) * -1);
    } else {
      dispatch(reverse());
    }
  }, [formula]);

  const pressPercent = useCallback(() => {
    setFormula(result * (formula / 100));
  }, [result, formula]);

  return (
    <View style={styles.container}>
      <Memory text={memory} />
      <Output text={isCalcProcessing ? (formula || result) : 0} />
      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_UTILITE}
          title={isCalcProcessing ? 'C' : 'AC'}
          onPress={pressClear}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_UTILITE}
          title="±"
          onPress={pressPlusMinus}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_UTILITE}
          title="%"
          onPress={pressPercent}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="÷"
          onPress={pressDiv}
        />
      </View>

      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="mc"
          onPress={pressMC}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="mr"
          onPress={pressMR}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="m-"
          onPress={pressMSub}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="m+"
          onPress={pressMAdd}
        />
      </View>

      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="7"
          onPress={addDigit('7')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="8"
          onPress={addDigit('8')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="9"
          onPress={addDigit('9')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="×"
          onPress={pressMul}
        />
      </View>

      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="4"
          onPress={addDigit('4')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="5"
          onPress={addDigit('5')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="6"
          onPress={addDigit('6')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="-"
          onPress={pressSub}
        />
      </View>

      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="1"
          onPress={addDigit('1')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="2"
          onPress={addDigit('2')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="3"
          onPress={addDigit('3')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="+"
          onPress={pressSum}
        />
      </View>

      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          size={BUTTON_TYPES.BUTTON_WIDE}
          title="0"
          onPress={addDigit('0')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="."
          onPress={appendDot}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="="
          onPress={pressRes}
        />
      </View>
    </View>
  );
};
