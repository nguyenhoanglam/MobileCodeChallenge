import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../text';
import { ButtonProps } from '~types/props';
import styles from './styles';

const Button = ({ title, disabled, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, disabled && styles.disabled]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
