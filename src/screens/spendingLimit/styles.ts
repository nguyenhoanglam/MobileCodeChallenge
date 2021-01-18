import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '~theme';
import { mvs } from '~utils/responsive';

const ITEM_WIDTH = (Metrics.screenWidth - 2 * (mvs(Metrics.spacingVeryBig) + mvs(Metrics.spacingBig))) / 3;

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerText: {
    fontFamily: Fonts.primary.bold,
    fontSize: mvs(Fonts.size.headerTitle),
    color: Colors.white,
    marginTop: mvs(12),
    marginHorizontal: mvs(Metrics.spacingVeryBig),
  },
  content: {
    flex: 1,
    marginTop: mvs(40),
    padding: mvs(Metrics.spacingVeryBig),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  scrollViewContent: {
    paddingBottom: mvs(Metrics.buttonHeight * 2),
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desciptionText: {
    fontFamily: Fonts.primary.medium,
    fontSize: mvs(Fonts.size.medium),
    color: Colors.darkGrey,
    marginLeft: mvs(12),
  },
  selectedLimitContainer: {
    height: mvs(40),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: mvs(Metrics.spacingBig),
  },
  selectedLimitText: {
    fontFamily: Fonts.primary.bold,
    fontSize: mvs(Fonts.size.veryBig),
    color: Colors.darkGrey,
    marginLeft: mvs(Metrics.spacingMedium),
  },
  line: {
    height: 1,
    width: '100%',
    marginBottom: mvs(Metrics.spacingBig),
    backgroundColor: Colors.lightGrey,
  },
  noteText: {
    fontSize: mvs(13),
    color: '#22222266',
  },
  itemContainer: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: mvs(Metrics.spacingVeryBig),
  },
  limitItem: {
    width: ITEM_WIDTH,
    alignItems: 'center',
    paddingVertical: mvs(12),
    borderRadius: 4,
    backgroundColor: Colors.lightGreen,
  },
  selectedLimitItemBg: {
    backgroundColor: Colors.green,
  },
  limitText: {
    fontFamily: Fonts.primary.demi,
    fontSize: mvs(Fonts.size.small),
    color: Colors.green,
  },
  selectedLimitTextColor: {
    color: Colors.white,
  },
  itemMarginLeft: {
    marginLeft: mvs(Metrics.spacingBig),
  },
  itemMarginTop: {
    marginTop: mvs(Metrics.spacingBig),
  },
  saveButton: {
    position: 'absolute',
    left: mvs(57),
    right: mvs(57),
    bottom: mvs(Metrics.spacingVeryBig),
  },
});
