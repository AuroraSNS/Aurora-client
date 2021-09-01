import React from 'react';
import { INotification } from '../../../interfaces/notification';
import NotificationBoxPresenter from './NotificationBoxPresenter';

type Props = {
    notis: INotification[] | null;
    newNoti?: boolean;
    onClickNoti?: (type: string, id: number, postId: number) => void;
};

const NotificationBoxContainer = ({ newNoti, notis, onClickNoti }: Props) => (
    <NotificationBoxPresenter notis={notis} newNoti={newNoti} onClickNoti={onClickNoti} />
);

NotificationBoxContainer.defaultProps = {
    newNoti: false,
    onClickNoti: null,
};

export default NotificationBoxContainer;
