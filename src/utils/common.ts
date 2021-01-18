import { Strings } from '~constants';

export const formatNumber = (number: number | undefined | null, suffixLength = 0) => {
  if (number === null || number === undefined) return null;
  return suffixLength > 0
    ? number.toFixed(suffixLength).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    : number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const formatPrice = (price: number | undefined | null, suffixLength = 0) => {
  if (price === null || price === undefined) return null;
  return `${Strings.general.currencySign} ${formatNumber(price, suffixLength)}`;
};
