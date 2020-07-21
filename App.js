import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from './components';
import { BUTTON_TYPES } from './constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_UTILITE}
          title="AC"
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
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="8"
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="9"
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
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="5"
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="6"
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
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="2"
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title="3"
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="+"
        />
      </View>

      <View style={styles.row}>
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          size={BUTTON_TYPES.BUTTON_WIDE}
          title="0"
        />
        <Button
          type={BUTTON_TYPES.BUTTON_DIGIT}
          title=","
        />
        <Button
          type={BUTTON_TYPES.BUTTON_CONTROL}
          title="+"
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
    justifyContent: 'center',
  },

  row: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: Dimensions.get('window').width * 0.04,
  }
});
