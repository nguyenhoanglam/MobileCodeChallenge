import { Platform, Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default {
  // Height
  screenHeight: screenHeight,
  headerHeight: 56,
  buttonHeight: 48,
  limitProgressBarHeight: 15,

  // Width
  screenWidth: screenWidth,

  // Size
  defaultIconSize: 24,
  get loadingIndicatorSize(): number | 'large' | 'small' {
    return Platform.OS === 'android' ? 36 : 'large';
  },

  // Radius
  buttonBorderRadius: 30,
  limitProgressBarBorderRadius: 30,

  // Opacity
  buttonOpacity: 0.7,

  // Spacing
  spacingVerySmall: 2,
  spacingSmall: 4,
  spacingMedium: 8,
  spacingBig: 16,
  spacingVeryBig: 24,

  get screenPadding() {
    return this.spacingVeryBig;
  },
};
