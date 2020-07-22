import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { MAX_FORMULA_LENGTH } from '../../constants';

const style = StyleSheet.create({
  out: {
    width: '92%',
    textAlign: 'right',
    lineHeight: 50,
    height: 50,
    marginBottom: Dimensions.get('window').width * 0.04,
    fontSize: 50,
    color: '#ffffff',
  },
});

const parseOutput = (number) => {
  if (number < 10 ** MAX_FORMULA_LENGTH) return parseFloat(number.toString().substr(0, 10));
  return 'Infinity';
};

export const Output = ({ text }) => (
  <Text style={style.out}>{parseOutput(parseFloat(text))}</Text>
);
