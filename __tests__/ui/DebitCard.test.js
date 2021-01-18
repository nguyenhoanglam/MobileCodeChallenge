import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import DebitCard from '~components/debitCard';

test('show/hide CVV number', () => {
  const { getByTestId } = render(
    <DebitCard name='Nguyen Hoang Lam' number='1122334455667788' cvv='456' date='12/21' />
  );

  const showHideButton = getByTestId('showHideButton');
  const cvvText = getByTestId('cvv');

  // CVV is shown at first
  expect(cvvText.props.children).toBe('456');

  // Hide CVV
  fireEvent.press(showHideButton);
  expect(cvvText.props.children).toBe('***');

  // Show CVV
  fireEvent.press(showHideButton);
  expect(cvvText.props.children).toBe('456');
});
