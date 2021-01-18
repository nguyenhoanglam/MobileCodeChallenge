import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { IconProps } from '~types/props';

const Icon = (props: IconProps) => {
  const { svg, style, onPress } = props;

  if (onPress) {
    return (
      <TouchableOpacity style={style} onPress={onPress} activeOpacity={0.7}>
        {svg}
      </TouchableOpacity>
    );
  }

  return <View style={style}>{svg}</View>;
};

export default Icon;
