import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_DEBIT_CARD_REQUEST,
  ENABLE_SPENDING_LIMIT_REQUEST,
  DISABLE_SPENDING_LIMIT_REQUEST,
  fetchDebitCardSuccess,
  fetchDebitCardError,
} from './actions';
import { setLoading, showToast } from '../general/actions';
import { GET, PUT } from '~services/api';
import { Exception } from '~types/models';
import { EnableSpendingLimitPayload } from '~types/payloads';
import { Strings } from '~constants';

function* fetchDebitCard() {
  // Fake user id
  const userId = '1';
  try {
    const response = yield call(GET, `debitCards/${userId}`);
    yield put(fetchDebitCardSuccess(response.card));
  } catch (error) {
    const { isApiError, message } = error as Exception;
    yield put(fetchDebitCardError(isApiError ? message : Strings.error.unknown));
  }
}

function* enableSpendingLimit(action: any) {
  yield put(setLoading(true));

  const { spending_limit, callback } = action.payload as EnableSpendingLimitPayload;
  let success = false;
  let resultMessage;
  try {
    // Fake user id
    const userId = '1';
    const data = { spending_limit };
    yield call(PUT, `debitCards/${userId}`, data);
    // The spending limit is successfully updated
    // However, beacause the mock API doesn't allow to update data on its server
    // so I'will create a fake successful debit card request instead of making a new request
    const card = {
      holder: 'Nguyen Hoang Lam',
      number: '1122334455667788',
      expiry_date: '12/21',
      cvv: '456',
      balance: 5678,
      spent: 5000,
      spending_limit: spending_limit,
      spending_limit_enabled: true,
    };
    yield put(fetchDebitCardSuccess(card));
    resultMessage = Strings.success.updateSpendingLimit;
    success = true;
  } catch (error) {
    const { isApiError, message } = error as Exception;
    resultMessage = isApiError ? message : Strings.error.updateSpendingLimit;
    success = false;
  }
  yield put(setLoading(false));
  yield put(showToast(resultMessage, !success));
  callback && callback(success);
}

function* disableSpendingLimit() {
  yield put(setLoading(true));

  try {
    // Fake user id
    const userId = '1';
    yield call(PUT, `debitCards/${userId}`);
    // Successfully disable spending limit
    // However, beacause the mock API doesn't allow to update data on its server
    // so I'will create a fake successful debit card request instead of making a new request
    const card = {
      holder: 'Nguyen Hoang Lam',
      number: '1122334455667788',
      expiry_date: '12/21',
      cvv: '456',
      balance: 5678,
      spent: 5000,
      spending_limit: 0,
      spending_limit_enabled: false,
    };
    yield put(fetchDebitCardSuccess(card));
    yield put(setLoading(false));
  } catch (error) {
    const { isApiError, message } = error as Exception;
    yield put(setLoading(false));
    yield put(showToast(isApiError ? message : Strings.error.unknown, true));
  }
}

const sagas = [
  takeLatest(FETCH_DEBIT_CARD_REQUEST, fetchDebitCard),
  takeLatest(ENABLE_SPENDING_LIMIT_REQUEST, enableSpendingLimit),
  takeLatest(DISABLE_SPENDING_LIMIT_REQUEST, disableSpendingLimit),
];

export default sagas;
