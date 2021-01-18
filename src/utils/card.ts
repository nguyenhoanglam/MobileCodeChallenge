export const isValidCardNumber = (cardNumber: string): boolean => {
  return cardNumber.length === 16;
};

export const getCardNumberParts = (cardNumber: string): string[] => {
  if (isValidCardNumber(cardNumber)) {
    const part1 = cardNumber.substring(0, 4);
    const part2 = cardNumber.substring(4, 8);
    const part3 = cardNumber.substring(8, 12);
    const part4 = cardNumber.substring(12, 16);

    return [part1, part2, part3, part4];
  }
  throw 'Invalid card number';
};

export const getSpentPercentage = (spent: number, limit: number): number => {
  return limit > 0 ? (spent / limit) * 100 : 100;
};
