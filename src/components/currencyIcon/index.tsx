import React from 'react';
import { View } from 'react-native';
import { Text } from '~components/common';
import styles from './styles';

const CurrencyIcon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.currencyText}>S$</Text>
    </View>
  );
};

export default CurrencyIcon;
