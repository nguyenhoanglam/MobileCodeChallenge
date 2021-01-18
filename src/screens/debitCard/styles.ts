import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '~theme';
import { ms, mvs } from '~utils/responsive';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  primaryColor: {
    backgroundColor: Colors.primary,
  },
  backgroundColor: {
    backgroundColor: Colors.background,
  },
  topContainer: {
    position: 'absolute',
    paddingHorizontal: ms(Metrics.spacingVeryBig),
  },
  bottomContainer: {
    paddingHorizontal: ms(Metrics.spacingVeryBig),
  },
  headerContainer: {
    width: '100%',
    minHeight: mvs(Metrics.headerHeight),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    fontFamily: Fonts.primary.bold,
    fontSize: mvs(Fonts.size.headerTitle),
    color: Colors.white,
  },
  logo: {
    backgroundColor: Colors.green,
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  balanceHolderText: {
    fontFamily: Fonts.primary.medium,
    fontSize: mvs(Fonts.size.medium),
    color: Colors.white,
    marginTop: mvs(Metrics.spacingVeryBig),
    marginBottom: mvs(Metrics.spacingBig),
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    fontFamily: Fonts.primary.bold,
    fontSize: mvs(Fonts.size.veryBig),
    color: Colors.white,
    marginLeft: ms(Metrics.spacingMedium),
  },
  bottomBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  menuItem: {
    marginTop: mvs(32),
  },
  limitInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  limitInfoTitle: {
    flex: 1,
    fontFamily: Fonts.primary.medium,
    fontSize: mvs(13),
    color: Colors.darkGrey,
    marginRight: mvs(Metrics.spacingVeryBig),
  },
  spentText: {
    fontFamily: Fonts.primary.demi,
    fontSize: mvs(13),
    color: Colors.green,
  },
  limitText: {
    fontFamily: Fonts.primary.medium,
    fontSize: mvs(13),
    color: '#22222233',
  },
  limitProgressBar: {
    height: mvs(Metrics.limitProgressBarHeight),
    borderRadius: Metrics.limitProgressBarBorderRadius,
    marginTop: mvs(Metrics.spacingMedium),
  },
  marginTop: {
    marginTop: mvs(32),
  },
});
