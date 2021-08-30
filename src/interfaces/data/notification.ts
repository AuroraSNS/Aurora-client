import { IAuth } from './user';

export interface IAllNotification {
    chatting: number;
    notification: number;
    friend: number;
}
export interface INotification {
    id: number;
    auth: IAuth;
    content: string;
    time: string;
}

export interface INotificationState {
    allNotification: IAllNotification | null;
    loadAllNotificationLoading: boolean;
    loadAllNotificationDone: boolean;
    loadAllNotificationError: null | string;
}
