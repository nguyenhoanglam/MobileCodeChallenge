import { formatNumber, formatPrice } from '~utils/common';

test('check format number', () => {
  expect(formatNumber(123)).toBe('123');
  expect(formatNumber(123, 2)).toBe('123.00');
  expect(formatNumber(1234)).toBe('1,234');
  expect(formatNumber(1234, 2)).toBe('1,234.00');
  expect(formatNumber(1234.56)).toBe('1,234.56');
  expect(formatNumber(1234.56, 3)).toBe('1,234.560');
  expect(formatNumber(undefined)).toBeNull();
  expect(formatNumber(null)).toBeNull();
});

test('check format price', () => {
  expect(formatPrice(1000)).toBe('S$ 1,000');
  expect(formatPrice(undefined)).toBeNull();
});
