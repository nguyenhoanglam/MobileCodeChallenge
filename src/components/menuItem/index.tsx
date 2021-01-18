import React from 'react';
import { View } from 'react-native';
import { Text } from '~components/common';
import { Switch } from 'react-native-paper';

import styles from './styles';
import { Colors } from '~theme';
import { MenuItemProps } from '~types/props';

const MenuItem = ({ title, description, svg: Icon, showSwitch, isSwitchOn, onToggleSwitch, style }: MenuItemProps) => {
  return (
    <View style={[styles.container, style]}>
      {Icon}
      <View style={styles.messageContainer}>
        <Text style={styles.title}>{title}</Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
      </View>
      {showSwitch && <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={Colors.switch} />}
    </View>
  );
};

export default React.memo(MenuItem);
