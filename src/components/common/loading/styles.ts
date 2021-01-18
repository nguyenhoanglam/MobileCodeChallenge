import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '~theme';
import { mvs } from '~utils/responsive';

export default StyleSheet.create({
  globalContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.modalBackground,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: mvs(Metrics.spacingVeryBig),
  },
  contentContainer: {
    alignItems: 'center',
  },
  message: {
    fontSize: mvs(Fonts.size.big),
    textAlign: 'center',
  },
  retryButton: {
    width: mvs(100),
    borderRadius: 4,
    marginTop: mvs(Metrics.spacingMedium),
    paddingVertical: mvs(12),
  },
});
