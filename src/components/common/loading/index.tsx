import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Button } from '~components/common';

import styles from './styles';
import { Strings } from '~constants';
import { Metrics, Colors } from '~theme';
import { LoadingProps } from '~types/props';

import { useTypedSelector } from '~redux';
import { getLoadingVisibility } from '~redux/general/selectors';

const Loading = (props: LoadingProps) => {
  const { isGlobal, loading, message, onRetry, children, style } = props;

  if (isGlobal) {
    const showLoading = useTypedSelector(getLoadingVisibility);
    return showLoading ? (
      <View style={styles.globalContainer}>
        <ActivityIndicator size={Metrics.loadingIndicatorSize} color={Colors.loadingIndicator} />
      </View>
    ) : null;
  }

  return (
    <View style={[loading || message ? styles.container : null, style]}>
      {loading ? (
        <ActivityIndicator size={Metrics.loadingIndicatorSize} color={Colors.loadingIndicator} />
      ) : message ? (
        <View style={styles.contentContainer}>
          {message ? <Text style={styles.message}>{message}</Text> : null}
          {onRetry && <Button title={Strings.action.retry} style={styles.retryButton} onPress={onRetry} />}
        </View>
      ) : (
        children
      )}
    </View>
  );
};

export default Loading;
