/* eslint-disable no-param-reassign */
import produce from 'immer';
import { INotificationAction } from '../../interfaces/act/notification';
import { IAllNotification, INotificationState } from '../../interfaces/data/notification';

export const LOAD_ALL_NOTIFICATION_REQUEST = 'LOAD_ALL_NOTIFICATION_REQUEST' as const;
export const LOAD_ALL_NOTIFICATION_SUCCESS = 'LOAD_ALL_NOTIFICATION_SUCCESS' as const;
export const LOAD_ALL_NOTIFICATION_FAILURE = 'LOAD_ALL_NOTIFICATION_FAILURE' as const;

export const initialState: INotificationState = {
    allNotification: null,
    loadAllNotificationLoading: false,
    loadAllNotificationDone: false,
    loadAllNotificationError: null,
};

const reducer = (state = initialState, action: INotificationAction) =>
    produce(state, (draft: INotificationState) => {
        switch (action.type) {
            case LOAD_ALL_NOTIFICATION_REQUEST:
                draft.loadAllNotificationLoading = true;
                draft.loadAllNotificationDone = false;
                draft.loadAllNotificationError = null;
                break;
            case LOAD_ALL_NOTIFICATION_SUCCESS:
                draft.loadAllNotificationLoading = false;
                draft.loadAllNotificationDone = true;
                draft.allNotification = action.data;
                break;
            case LOAD_ALL_NOTIFICATION_FAILURE:
                draft.loadAllNotificationLoading = false;
                draft.loadAllNotificationError = action.error;
                break;
            default:
                break;
        }
    });

export const loadAllNotificationRequest = (token: string) => ({
    type: LOAD_ALL_NOTIFICATION_REQUEST,
    token,
});

export const loadAllNotificationSuccess = (data: IAllNotification) => ({
    type: LOAD_ALL_NOTIFICATION_SUCCESS,
    data,
});

export const loadAllNotificationFailure = (error: string) => ({
    type: LOAD_ALL_NOTIFICATION_FAILURE,
    error,
});

export default reducer;
