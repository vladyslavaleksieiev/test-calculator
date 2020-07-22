import { StyleSheet, Dimensions } from 'react-native';
import { BUTTON_TYPES } from '../../constants';

const classes = StyleSheet.create({
  button: {
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonSmall: {
    height: Dimensions.get('window').width * 0.2,
    width: Dimensions.get('window').width * 0.2,
  },

  buttonBig: {
    height: Dimensions.get('window').width * 0.2,
    width: Dimensions.get('window').width * 0.45,
  },

  buttonDigit: {
    backgroundColor: '#333333',
  },

  buttonControl: {
    backgroundColor: '#f1a43c',
  },

  buttonUtilite: {
    backgroundColor: '#a6a6a6',
  },
});

export const parseType = (type) => {
  const result = [classes.button];

  switch (type) {
    case BUTTON_TYPES.BUTTON_DIGIT:
      result.push(classes.buttonDigit);
      break;
    case BUTTON_TYPES.BUTTON_CONTROL:
      result.push(classes.buttonControl);
      break;
    case BUTTON_TYPES.BUTTON_UTILITE:
      result.push(classes.buttonUtilite);
      break;
    default:
      break;
  }

  return StyleSheet.flatten(result);
};

export const parseSize = (size) => {
  switch (size) {
    case BUTTON_TYPES.BUTTON_WIDE:
      return classes.buttonBig;
    default:
      return classes.buttonSmall;
  }
};
