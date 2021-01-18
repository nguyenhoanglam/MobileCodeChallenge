import React from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { Colors } from '~theme';

import { useDispatch } from 'react-redux';
import { useTypedSelector } from '~redux';
import { hideToast } from '~redux/general/actions';
import { getToast } from '~redux/general/selectors';

const Toast = () => {
  const { visible, message, isError } = useTypedSelector(getToast);

  const dispatch = useDispatch();

  const onToastDismiss = () => {
    dispatch(hideToast());
  };

  return (
    <Snackbar
      visible={visible}
      duration={2000}
      onDismiss={onToastDismiss}
      style={isError ? styles.error : styles.success}
    >
      {message}
    </Snackbar>
  );
};

export default Toast;

const styles = StyleSheet.create({
  success: {
    backgroundColor: Colors.toastSuccess,
  },
  error: {
    backgroundColor: Colors.toastError,
  },
});
