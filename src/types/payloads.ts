export type EnableSpendingLimitPayload = {
  spending_limit: number;
  callback?: (success: boolean, message?: string) => void;
};
