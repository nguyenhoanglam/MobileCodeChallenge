import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// UI design dimensions
const UI_WIDTH = 414;
const UI_HEIGHT = 896;

// Width responsive. Used for width, image size...
const scale = (size: number) => (shortDimension / UI_WIDTH) * size;

// Height responsive
const verticalScale = (size: number) => (longDimension / UI_HEIGHT) * size;

// Moderate width responsive. Used for horizontal padding, marign, font size
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// Moderate height responsive. Used for vertical padding, marin, font size
const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
