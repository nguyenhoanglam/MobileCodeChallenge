import React from 'react';
import { View } from 'react-native';
import { Text } from '~components/common';
import { Styles } from '~theme';

const HomeScreen = () => {
  return (
    <View style={Styles.flexCenter}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
