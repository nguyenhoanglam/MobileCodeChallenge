export default {
  // Palette
  primary: '#0C365A',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'rgba(0,0,0,0)',
  grey: '#DDDDDD',
  lightGrey: '#EEEEEE',
  darkGrey: '#222222',
  green: '#01D167',
  lightGreen: '#01D16712',
  red: '#F44336',

  // Purpose
  get appHeader() {
    return this.primary;
  },
  get background() {
    return this.white;
  },
  get modalBackground() {
    return 'rgba(0,0,0,0.3)';
  },
  get bottomTabBarBackground() {
    return this.white;
  },
  get bottomTabActive() {
    return this.green;
  },
  get bottomTabInActive() {
    return this.grey;
  },
  get creditCardBackground() {
    return this.green;
  },
  get text() {
    return this.black;
  },
  get errorText() {
    return this.black;
  },
  get button() {
    return this.green;
  },
  get disabledButton() {
    return this.lightGrey;
  },
  get buttonTitle() {
    return this.white;
  },
  get switch() {
    return this.green;
  },
  get icon() {
    return this.white;
  },
  get loadingIndicator() {
    return this.green;
  },
  get refreshControl() {
    return this.green;
  },
  get toastSuccess() {
    return this.black;
  },
  get toastError() {
    return this.red;
  },
  get shadow() {
    return this.black;
  },
};
