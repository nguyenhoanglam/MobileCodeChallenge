import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '~theme';
import { ms, mvs } from '~utils/responsive';

const BORDER_RADIUS = 12;
const SHOW_HIDE_HEIGHT = 44;
const REAL_SHOW_HIDE_HEIGHT = SHOW_HIDE_HEIGHT - BORDER_RADIUS;

export default StyleSheet.create({
  container: {
    marginTop: REAL_SHOW_HIDE_HEIGHT,
  },
  showHideContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
    top: -REAL_SHOW_HIDE_HEIGHT,
  },
  showHide: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: Colors.white,
    height: SHOW_HIDE_HEIGHT,
    paddingBottom: BORDER_RADIUS,
    paddingHorizontal: ms(14),
  },
  showHideText: {
    fontFamily: Fonts.primary.demi,
    fontSize: mvs(12),
    color: Colors.green,
    marginLeft: ms(Metrics.spacingSmall),
  },
  maskCardContainer: {
    borderRadius: BORDER_RADIUS,
    backgroundColor: Colors.creditCardBackground,
  },
  cardContainer: {
    paddingLeft: ms(12),
    paddingTop: ms(14),
    paddingRight: ms(24),
    paddingBottom: ms(24),
    marginLeft: ms(12),
    marginTop: ms(10),
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    borderLeftColor: 'rgba(0,197,97,0.6)',
    borderTopColor: 'rgba(0,197,97,0.6)',
    borderLeftWidth: 2,
    borderTopWidth: 2,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardHolderText: {
    fontFamily: Fonts.primary.bold,
    fontSize: mvs(22),
    color: Colors.white,
    marginVertical: ms(24),
  },
  cardNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: mvs(18),
  },
  dotNumberPart: {
    flexDirection: 'row',
    marginLeft: ms(16),
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
    backgroundColor: Colors.white,
  },
  number: {
    fontFamily: Fonts.primary.demi,
    fontSize: mvs(Fonts.size.medium),
    color: Colors.white,
    letterSpacing: 3,
    marginLeft: ms(24),
  },
  noMarginLeft: {
    marginLeft: 0,
  },
  footerContainer: {
    flexDirection: 'row',
  },
  cvvContainer: { flexDirection: 'row', alignItems: 'center' },
  dateText: {
    fontFamily: Fonts.primary.demi,
    fontSize: mvs(13),
    color: Colors.white,
    marginRight: ms(32),
  },
  cvvText: {
    fontFamily: Fonts.primary.demi,
    fontSize: mvs(13),
    color: Colors.white,
  },
  visaContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: mvs(Metrics.spacingSmall),
  },
});
