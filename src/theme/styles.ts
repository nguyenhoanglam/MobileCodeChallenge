import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 24,
  },
});
