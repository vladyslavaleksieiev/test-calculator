import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button, Output } from './components';
import { BUTTON_TYPES, MAX_FORMULA_LENGTH } from './constants';
import { calcSum } from './utils';

export default function App() {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState(0);
  const [isActionSeted, setActionSeted] = useState(false); 


  const addDot = () => {
    if (formula.indexOf('.') === -1 && formula.length < MAX_FORMULA_LENGTH) {
      setFormula(`${formula}.`)
    }
  }
  const addDigit = (digit) => () => {
    let result = formula;
    if (isActionSeted) {
      setActionSeted(false);
      result = '';
    }
    if (result.length < MAX_FORMULA_LENGTH) {
      result = `${result}${digit}`;
    }
    setFormula(result);
  }
  const actionAdd = () => {
    const expression = result + parseFloat(formula);
    setResult(expression);
    setFormula(expression.toString());
    setActionSeted(true);
  }
  const actionClear = () => {
    setResult(0);
    setFormula('');
    setActionSeted(false);
  }

  return (
    <View style={styles.container}>
      <Output text={formula} />
      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_UTILITE}
          title="AC"
          onPress={actionClear}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_UTILITE}
          title="±"
        />
        <Button
          type={BUTTON_TYPES.BUTTON_UTILITE}
          title="%"
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="÷"
        />
      </View>
      
      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="mc"
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="mr"
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="m-"
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="m+"
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
          onPress={actionAdd}
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
          onPress={addDot}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="="
        />
      </View>
    </View>
  );
}

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
  }
});
