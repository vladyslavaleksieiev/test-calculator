import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import { parseType, parseSize } from './util';

const classes = StyleSheet.create({
  buttonContent: {
    fontSize: 30,
    color: '#fff',
  },

  buttonActive: {
    backgroundColor: '#f3cb96',
  },
});

export const Button = ({
  onPress,
  title,
  type,
  size,
  active,
}) => {
  const style = StyleSheet.flatten([
    parseType(type),
    parseSize(size),
    active && classes.buttonActive,
  ]);

  return (
    <TouchableHighlight
      style={style}
      onPress={onPress}
      underlayColor={`${style.backgroundColor}88`}
    >
      <Text style={classes.buttonContent}>{title}</Text>
    </TouchableHighlight>
  );
};
