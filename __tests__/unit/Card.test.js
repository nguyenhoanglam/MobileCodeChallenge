import { isValidCardNumber, getCardNumberParts, getSpentPercentage } from '~utils/card';

describe('check card number', () => {
  test('valid card number', () => {
    expect(isValidCardNumber('1122334455667788')).toBe(true);
  });

  test('invalid card number', () => {
    expect(isValidCardNumber('112233445566778899')).toBe(false);
  });
});

test('generate card number parts', () => {
  const parts = getCardNumberParts('1122334455667788');
  expect(parts).toEqual(['1122', '3344', '5566', '7788']);
});

test('get spent percentage base on limit', () => {
  expect(getSpentPercentage(50, 100)).toBe(50);
  expect(getSpentPercentage(50, 0)).toBe(100);
});
