import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';

const style = StyleSheet.create({
  memory: {
    color: '#fff',
    width: '92%',
    textAlign: 'left',
    marginBottom: Dimensions.get('window').width * 0.04,
  },
});

export const Memory = ({ text }) => (
  <Text style={style.memory}>
    {`Memory: ${text}`}
  </Text>
);
