import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import { parseType, parseSize } from './util';

export const Button = ({ onPress, title, type, size }) => {
  const style = StyleSheet.flatten([parseType(type), parseSize(size)]);
  return (
    <TouchableHighlight
      style={style}
      onPress={onPress}
      underlayColor="#222222"
    >
      <Text style={classes.buttonContent}>{title}</Text>
    </TouchableHighlight>
  );
};


const classes = StyleSheet.create({
  buttonContent: {
    fontSize: 30,
    color: '#fff',
  },
});
