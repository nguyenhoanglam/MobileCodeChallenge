import { ReduxAction } from '~types/models';

export const SET_LOADING = 'SET_LOADING';
export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

export const setLoading = (show: boolean): ReduxAction => {
  return {
    type: SET_LOADING,
    payload: show,
  };
};

export const showToast = (message: string, isError?: boolean): ReduxAction => {
  return {
    type: SHOW_TOAST,
    payload: { visible: true, message, isError },
  };
};

export const hideToast = (): ReduxAction => {
  return {
    type: HIDE_TOAST,
  };
};
