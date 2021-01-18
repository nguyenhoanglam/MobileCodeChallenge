import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '~theme';
import { ms } from '~utils/responsive';

export default StyleSheet.create({
  default: {
    fontFamily: Fonts.primary.base,
    fontSize: ms(Fonts.size.medium),
    color: Colors.text,
  },
});
