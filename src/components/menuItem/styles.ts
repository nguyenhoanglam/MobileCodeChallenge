import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '~theme';
import { ms, mvs } from '~utils/responsive';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  messageContainer: {
    flex: 1,
    marginHorizontal: ms(12),
  },
  title: {
    fontFamily: Fonts.primary.medium,
    fontSize: mvs(Fonts.size.medium),
    color: Colors.primary,
  },
  description: {
    fontSize: mvs(13),
    color: 'rgba(34,34,34,0.4)',
    marginTop: mvs(Metrics.spacingMedium),
  },
});
