import { ReduxAction, DebitCard } from '~types/models';
import { EnableSpendingLimitPayload } from '~types/payloads';

export const FETCH_DEBIT_CARD_REQUEST = 'FETCH_DEBIT_CARD_REQUEST';
export const FETCH_DEBIT_CARD_SUCCESS = 'FETCH_DEBIT_CARD_SUCCESS';
export const FETCH_DEBIT_CARD_ERROR = 'FETCH_DEBIT_CARD_ERROR';

export const ENABLE_SPENDING_LIMIT_REQUEST = 'ENABLE_SPENDING_LIMIT_REQUEST';
export const DISABLE_SPENDING_LIMIT_REQUEST = 'DISABLE_SPENDING_LIMIT_REQUEST';

export const fetchDebitCardRequest = (): ReduxAction => {
  return {
    type: FETCH_DEBIT_CARD_REQUEST,
  };
};

export const fetchDebitCardSuccess = (card: DebitCard): ReduxAction => {
  return {
    type: FETCH_DEBIT_CARD_SUCCESS,
    payload: card,
  };
};

export const fetchDebitCardError = (error: string): ReduxAction => {
  return {
    type: FETCH_DEBIT_CARD_ERROR,
    payload: error,
  };
};

export const enableSpendingLimitRequest = (data: EnableSpendingLimitPayload): ReduxAction => {
  return {
    type: ENABLE_SPENDING_LIMIT_REQUEST,
    payload: data,
  };
};

export const disableSpendingLimitRequest = (): ReduxAction => {
  return {
    type: DISABLE_SPENDING_LIMIT_REQUEST,
  };
};
