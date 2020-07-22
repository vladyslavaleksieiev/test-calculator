import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';

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

export const Output = ({ text }) => (
  <Text style={style.out}>{text}</Text>
);
