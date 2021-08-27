import React from 'react';
import { INotification } from '../../interfaces/data/notification';
import NotificationBox from '../common/NotificationBox';
import AppLayout from '../layout/AppLayout';

type Props = {
    noti: INotification[] | null;
};

const NotificationPresenter = ({ noti }: Props) => (
    <AppLayout title="Notification" filter={false}>
        <NotificationBox notis={noti as INotification[]} newNoti />
        <NotificationBox notis={noti as INotification[]} />
    </AppLayout>
);

export default NotificationPresenter;
