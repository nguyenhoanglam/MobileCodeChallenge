import { RootState } from '~redux';

export const getLoadingVisibility = (state: RootState) => state.general.showLoading;
export const getToast = (state: RootState) => state.general.toast;
