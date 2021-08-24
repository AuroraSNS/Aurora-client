import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { INotification } from '../../interfaces/data/notification';
import { createSampleNotifications } from '../../util/sample';
import NotificationPresenter from './NotificationPresenter';

const NotificationContainer = () => {
    const [noti, setNoti] = useState<INotification[] | null>(null);

    useEffect(() => {
        let res: INotification[] = createSampleNotifications(10);
        setNoti(res);
    }, []);

    return <NotificationPresenter noti={noti} />;
};

export default NotificationContainer;
