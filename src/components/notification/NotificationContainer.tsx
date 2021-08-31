import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useToggle from '../../hooks/useToggle';
import { INotification } from '../../interfaces/notification';
import { IPost } from '../../interfaces/post';
import { readNotificationRequest } from '../../redux/modules/notification';
import { RootState } from '../../redux/modules/reducer';
import NotificationPresenter from './NotificationPresenter';

const NotificationContainer = () => {
    const dispatch = useDispatch();
    const { notification } = useSelector((state: RootState) => state.notification);
    const [newNoti, setNewNoti] = useState<INotification[] | null>(null);
    const [prevNoti, setPrevNoti] = useState<INotification[] | null>(null);

    const [post, setPost] = useState<IPost | null>(null);

    const [showModal, showModalToggle] = useToggle(false);

    const loadPost = useCallback(async (postId: number) => {
        const res = await axios.get(`/posts/one/${postId}`);
        setPost(res.data);
        showModalToggle();
    }, []);

    const onClickNoti = useCallback((id: number, postId: number) => {
        loadPost(postId);
        dispatch(readNotificationRequest('POST', id));
    }, []);

    useEffect(() => {
        if (notification) {
            setNewNoti(notification.filter((noti: INotification) => noti.isRead === false));
            setPrevNoti(notification.filter((noti: INotification) => noti.isRead === true));
        }
    }, [notification]);

    return (
        <NotificationPresenter
            post={post}
            newNoti={newNoti}
            prevNoti={prevNoti}
            onClickNoti={onClickNoti}
            showModal={showModal}
            showModalToggle={showModalToggle}
        />
    );
};

export default NotificationContainer;
