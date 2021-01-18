import React from 'react';
import { View } from 'react-native';
import { Text, Icon } from '~components/common';
import { goBack } from '~services/navigation';

import styles from './styles';
import { AppHeaderProps } from '~types/props';
import BackSvg from '../../assets/icons/back.svg';
import Logo from '../../assets/icons/logo.svg';

const AppHeader = ({ title, showBackButton, style }: AppHeaderProps) => {
  const onBackPress = React.useCallback(() => {
    goBack();
  }, []);

  return (
    <View style={[styles.container, style]}>
      {showBackButton && <Icon svg={<BackSvg />} onPress={onBackPress} />}
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <Logo />
    </View>
  );
};

export default React.memo(AppHeader);
