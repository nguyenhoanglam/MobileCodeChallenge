import { createStore, combineReducers, applyMiddleware } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import logger from 'redux-logger';

import generalReducer from './general/reducer';
import debitCardReducer from './debitCard/reducer';
import debitCardSagas from './debitCard/sagas';

const INITIAL_STATE = {};

// Reducers
const rootReducer = combineReducers({
  general: generalReducer,
  debitCard: debitCardReducer,
});

// Middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = __DEV__ ? [sagaMiddleware, logger] : [sagaMiddleware];

// Store
const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(...middlewares));

// Sagas
function* rootSaga() {
  yield all([...debitCardSagas]);
}
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
