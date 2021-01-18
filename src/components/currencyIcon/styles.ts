import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '~theme';
import { ms, mvs } from '~utils/responsive';

export default StyleSheet.create({
  container: {
    paddingVertical: mvs(Metrics.spacingSmall),
    paddingHorizontal: ms(12),
    backgroundColor: Colors.green,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyText: {
    fontFamily: Fonts.primary.bold,
    fontSize: mvs(Fonts.size.small),
    color: Colors.white,
  },
});
