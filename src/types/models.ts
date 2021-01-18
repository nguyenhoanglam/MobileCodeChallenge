export type ReduxAction = {
  type: string;
  payload?: any;
};

export interface Exception extends Error {
  message: string;
  isApiError?: boolean;
  statusCode?: number;
}

export type DebitCard = {
  holder: string;
  number: string;
  expiry_date: string;
  cvv: string;
  balance: number;
  spent: number;
  spending_limit: number;
  spending_limit_enabled: boolean;
};

export type Toast = {
  visible: boolean;
  message: string;
  isError?: boolean;
};
