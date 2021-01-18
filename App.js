import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '~services/navigation/rootNavigation';

import { store } from '~redux';
import { Loading, Toast } from '~components/common';
import { Colors } from '~theme';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <StatusBar style='light' />
        <Navigation />
        <Loading isGlobal={true} />
        <Toast />
      </SafeAreaProvider>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
