import { StyleProp, TextProps, TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';

export interface TextWrapperProps extends TextProps {
  animated?: boolean;
  children?: any;
  style?: StyleProp<TextStyle>;
}

export interface LoadingProps {
  isGlobal?: boolean;
  loading?: boolean;
  message?: string | undefined | null;
  onRetry?: () => void;
  children?: JSX.Element | null;
  style?: StyleProp<ViewStyle>;
}

export interface IconProps extends TouchableOpacityProps {
  svg: JSX.Element | null;
}

export interface CreditCardProps {
  name: string;
  number: string;
  date: string;
  cvv: string;
  style?: StyleProp<ViewStyle>;
}

export interface MenuItemProps {
  title: string;
  description?: string;
  svg: JSX.Element | null;
  showSwitch?: boolean;
  isSwitchOn?: boolean;
  onToggleSwitch?: () => void;
  style?: StyleProp<ViewStyle>;
}

export interface AppHeaderProps {
  title?: string;
  showBackButton?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface ButtonProps {
  title?: string;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
