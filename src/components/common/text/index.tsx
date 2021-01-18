import React from 'react';
import { Text, Animated } from 'react-native';
import { TextWrapperProps } from '~types/props';
import styles from './styles';

const TextWrapper = (props: TextWrapperProps) => {
  const { style, children, animated, ...rest } = props;
  const textStyles = [styles.default, style];

  if (animated) {
    return (
      <Animated.Text style={textStyles} {...rest}>
        {children}
      </Animated.Text>
    );
  }

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
};

export default TextWrapper;
