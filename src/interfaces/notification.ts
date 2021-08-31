import { IAuth } from './user';

import {
    loadAllNotificationSuccess,
    loadAllNotificationFailure,
    loadNotificationSuccess,
    loadNotificationFailure,
    loadFriendNotificationSuccess,
    loadFriendNotificationFailure,
} from '../redux/modules/notification';

export interface IAllNotification {
    chatting: number;
    normal: number;
    friend: number;
}
export interface INotification {
    id: number;
    type: string;
    sender: IAuth;
    message: string;
    targetId: number;
    timeStamp: string;
    isRead: boolean;
}

export interface ISendNoti {
    type: string;
    from: number;
    to: number;
    targetId: number | null;
    message: string;
}

export interface IFriendRequestList {
    id: number;
    sender: IAuth;
}

export interface INotificationState {
    allNotification: IAllNotification | null;
    notification: INotification[] | null;
    friendRequestList: IFriendRequestList[] | null;
    loadAllNotificationError: null | string;
    loadNotificationError: null | string;
    loadFriendNotificationError: null | string;
}

export type INotificationAction =
    | ReturnType<typeof loadAllNotificationSuccess>
    | ReturnType<typeof loadAllNotificationFailure>
    | ReturnType<typeof loadNotificationSuccess>
    | ReturnType<typeof loadNotificationFailure>
    | ReturnType<typeof loadFriendNotificationSuccess>
    | ReturnType<typeof loadFriendNotificationFailure>;
