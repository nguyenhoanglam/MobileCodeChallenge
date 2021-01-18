import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '~theme';
import { ms, mvs } from '~utils/responsive';

export default StyleSheet.create({
  container: {
    width: '100%',
    minHeight: mvs(Metrics.headerHeight),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(Metrics.spacingVeryBig),
    backgroundColor: Colors.appHeader,
  },
  title: {
    fontFamily: Fonts.primary.bold,
    fontSize: mvs(Fonts.size.headerTitle),
    color: Colors.white,
  },
});
