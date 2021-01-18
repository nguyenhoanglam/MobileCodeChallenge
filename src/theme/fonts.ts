const primary = {
  base: 'AvenirNextLTPro-Regular',
  medium: 'AvenirNextLTPro-Medium',
  demi: 'AvenirNextLTPro-Demi',
  bold: 'AvenirNextLTPro-Bold',
  italic: 'AvenirNextLTPro-Italic',
};

const size = {
  verySmall: 8,
  small: 12,
  medium: 14,
  big: 16,
  veryBig: 24,

  get headerTitle() {
    return this.veryBig;
  },
  get bottomTabTitle() {
    return 9;
  },
  get buttonTitle() {
    return this.big;
  },
};

export default { primary, size };
