import React from 'react';
import { INotification } from '../../../interfaces/notification';
import Avatar from '../../common/Avatar';
import { NotificationMsg, Wrapper } from './style';

type Props = {
    notis: INotification[] | null;
    newNoti?: boolean;
    onClickNoti?: (type: string, id: number, postId: number) => void;
};

const NotificationBoxPresenter = ({ newNoti, notis, onClickNoti }: Props) => (
    <Wrapper newNoti={newNoti as boolean}>
        <div className="title">{newNoti ? '새로운 알림' : '이전 알림'}</div>
        <div className="notifications">
            {notis?.map(({ id, type, message, timeStamp, targetId }: INotification) => (
                <NotificationMsg
                    key={id}
                    onClick={() => {
                        if (newNoti && onClickNoti) {
                            onClickNoti(type, id, targetId);
                        }
                    }}
                >
                    <Avatar url="" size={44} />
                    <div className="noti-info">
                        <div>{message}</div>
                        <span>{timeStamp} ago</span>
                    </div>
                </NotificationMsg>
            ))}
        </div>
    </Wrapper>
);

NotificationBoxPresenter.defaultProps = {
    newNoti: false,
    onClickNoti: null,
};

export default NotificationBoxPresenter;
