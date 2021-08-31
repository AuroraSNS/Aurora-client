import React from 'react';
import { INotification } from '../../interfaces/notification';
import { IPost } from '../../interfaces/post';
import PostCardModalContainer from '../home/postCard/postCardModal/PostCardModalContainer';
import AppLayout from '../layout/AppLayout';
import NotificationBoxContainer from './notificationBox/NotificationBoxContainer';

type Props = {
    newNoti: INotification[] | null;
    prevNoti: INotification[] | null;
    onClickNoti: (id: number, postId: number) => void;
    showModal: boolean;
    showModalToggle: () => void;
    post: IPost | null;
};

const NotificationPresenter = ({ post, newNoti, prevNoti, onClickNoti, showModal, showModalToggle }: Props) => (
    <AppLayout title="Notification" filter={false}>
        <NotificationBoxContainer notis={newNoti as INotification[]} newNoti onClickNoti={onClickNoti} />
        <NotificationBoxContainer notis={prevNoti as INotification[]} />
        {showModal && <PostCardModalContainer post={post as IPost} onClose={showModalToggle} />}
    </AppLayout>
);

export default NotificationPresenter;
