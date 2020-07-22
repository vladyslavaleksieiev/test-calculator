import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';


export const Output = ({ text }) => (
  <Text style={style.out}>{text}</Text>
);

const style = StyleSheet.create({
  out: {
    width: '90%',
    textAlign: 'right',
    lineHeight: 50,
    height: 50,
    marginBottom: Dimensions.get('window').width * 0.04,
    fontSize: 50,
    color: '#ffffff',
  }
})