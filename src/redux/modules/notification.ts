/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    IAllNotification,
    IFriendRequestList,
    INotification,
    INotificationAction,
    INotificationState,
} from '../../interfaces/notification';

export const LOAD_ALL_NOTIFICATION_REQUEST = 'LOAD_ALL_NOTIFICATION_REQUEST' as const;
export const LOAD_ALL_NOTIFICATION_SUCCESS = 'LOAD_ALL_NOTIFICATION_SUCCESS' as const;
export const LOAD_ALL_NOTIFICATION_FAILURE = 'LOAD_ALL_NOTIFICATION_FAILURE' as const;

export const LOAD_NOTIFICATION_REQUEST = 'LOAD_NOTIFICATION_REQUEST' as const;
export const LOAD_NOTIFICATION_SUCCESS = 'LOAD_NOTIFICATION_SUCCESS' as const;
export const LOAD_NOTIFICATION_FAILURE = 'LOAD_NOTIFICATION_FAILURE' as const;

export const LOAD_FRIEND_NOTIFICATION_REQUEST = 'LOAD_FRIEND_NOTIFICATION_REQUEST' as const;
export const LOAD_FRIEND_NOTIFICATION_SUCCESS = 'LOAD_FRIEND_NOTIFICATION_SUCCESS' as const;
export const LOAD_FRIEND_NOTIFICATION_FAILURE = 'LOAD_FRIEND_NOTIFICATION_FAILURE' as const;

export const READ_NOTIFICATION_REQUEST = 'READ_NOTIFICATION_REQUEST' as const;

export const initialState: INotificationState = {
    allNotification: null,
    loadAllNotificationError: null,
    notification: null,
    loadNotificationError: null,
    friendRequestList: null,
    loadFriendNotificationError: null,
};

const reducer = (state = initialState, action: INotificationAction) =>
    produce(state, (draft: INotificationState) => {
        switch (action.type) {
            case LOAD_ALL_NOTIFICATION_SUCCESS:
                draft.allNotification = action.data;
                draft.loadAllNotificationError = null;
                break;
            case LOAD_ALL_NOTIFICATION_FAILURE:
                draft.loadAllNotificationError = action.error;
                break;
            case LOAD_NOTIFICATION_SUCCESS:
                draft.notification = action.data;
                draft.loadNotificationError = null;
                break;
            case LOAD_NOTIFICATION_FAILURE:
                draft.loadNotificationError = action.error;
                break;
            case LOAD_FRIEND_NOTIFICATION_SUCCESS:
                draft.friendRequestList = action.data;
                draft.loadFriendNotificationError = null;
                break;
            case LOAD_FRIEND_NOTIFICATION_FAILURE:
                draft.loadFriendNotificationError = action.error;
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

export const loadNotificationRequest = (token: string) => ({
    type: LOAD_NOTIFICATION_REQUEST,
    token,
});

export const loadNotificationSuccess = (data: INotification[]) => ({
    type: LOAD_NOTIFICATION_SUCCESS,
    data,
});

export const loadNotificationFailure = (error: string) => ({
    type: LOAD_NOTIFICATION_FAILURE,
    error,
});

export const readNotificationRequest = (notiType: string, id: number) => ({
    type: READ_NOTIFICATION_REQUEST,
    notiType,
    id,
});

export const loadFriendNotificationRequest = (token: string) => ({
    type: LOAD_FRIEND_NOTIFICATION_REQUEST,
    token,
});

export const loadFriendNotificationSuccess = (data: IFriendRequestList[]) => ({
    type: LOAD_FRIEND_NOTIFICATION_SUCCESS,
    data,
});

export const loadFriendNotificationFailure = (error: string) => ({
    type: LOAD_FRIEND_NOTIFICATION_FAILURE,
    error,
});

export default reducer;
