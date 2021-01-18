import { produce } from 'immer';
import { ReduxAction, DebitCard } from '~types/models';
import { FETCH_DEBIT_CARD_REQUEST, FETCH_DEBIT_CARD_SUCCESS, FETCH_DEBIT_CARD_ERROR } from './actions';

const INITIAL_STATE: {
  loading: boolean;
  error: string | null;
  card: DebitCard | null;
} = {
  loading: false,
  error: null,
  card: null,
};

export default (state = INITIAL_STATE, action: ReduxAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_DEBIT_CARD_REQUEST: {
        draft.loading = true;
        draft.error = null;
        break;
      }
      case FETCH_DEBIT_CARD_SUCCESS: {
        draft.loading = false;
        draft.error = null;
        draft.card = action.payload;
        break;
      }
      case FETCH_DEBIT_CARD_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      default:
        break;
    }
  });
