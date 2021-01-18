import { produce } from 'immer';
import { ReduxAction } from '~types/models';
import { SET_LOADING, SHOW_TOAST, HIDE_TOAST } from './actions';
import { Toast } from '~types/models';

const TOAST_INITIAL_VALUE: Toast = {
  visible: false,
  message: '',
  isError: false,
};

const INITIAL_STATE: {
  showLoading: boolean;
  toast: Toast;
} = {
  showLoading: false,
  toast: TOAST_INITIAL_VALUE,
};

export default (state = INITIAL_STATE, action: ReduxAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING:
        draft.showLoading = action.payload;
        break;
      case SHOW_TOAST:
        draft.toast = action.payload;
        break;
      case HIDE_TOAST:
        draft.toast = TOAST_INITIAL_VALUE;
        break;
      default:
        break;
    }
  });
