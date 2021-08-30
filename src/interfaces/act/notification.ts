import {
    loadAllNotificationRequest,
    loadAllNotificationSuccess,
    loadAllNotificationFailure,
} from '../../redux/modules/notification';

export type INotificationAction =
    | ReturnType<typeof loadAllNotificationRequest>
    | ReturnType<typeof loadAllNotificationSuccess>
    | ReturnType<typeof loadAllNotificationFailure>;
