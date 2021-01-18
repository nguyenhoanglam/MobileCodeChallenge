import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '~theme';
import { mvs } from '~utils/responsive';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.button,
    borderRadius: Metrics.buttonBorderRadius,
    paddingVertical: mvs(17),
  },
  disabled: {
    backgroundColor: Colors.disabledButton,
  },
  title: {
    fontFamily: Fonts.primary.demi,
    fontSize: mvs(Fonts.size.buttonTitle),
    color: Colors.buttonTitle,
  },
});
