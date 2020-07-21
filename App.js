import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button, Output } from './components';
import { BUTTON_TYPES } from './constants';

export default function App() {
  const [formula, setFormula] = useState('');


  const onPress = (char) => () => setFormula(`${formula}${char}`);

  return (
    <View style={styles.container}>
      <Output text={formula} />
      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_UTILITE}
          title="AC"
          onPress={() => setFormula('')}
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
          onPress={onPress('÷')}
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
          onPress={onPress('7')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="8"
          onPress={onPress('8')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="9"
          onPress={onPress('9')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="×"
          onPress={onPress('×')}
        />
      </View>

      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="4"
          onPress={onPress('4')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="5"
          onPress={onPress('5')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="6"
          onPress={onPress('6')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="-"
          onPress={onPress('-')}
        />
      </View>

      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="1"
          onPress={onPress('1')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="2"
          onPress={onPress('2')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="3"
          onPress={onPress('3')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="+"
          onPress={onPress('+')}
        />
      </View>

      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          size={BUTTON_TYPES.BUTTON_WIDE}
          title="0"
          onPress={onPress('0')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title=","
          onPress={onPress(',')}
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="="
          onPress={onPress('=')}
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
