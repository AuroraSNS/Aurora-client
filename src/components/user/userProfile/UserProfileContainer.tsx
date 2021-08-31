import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useToggle from '../../../hooks/useToggle';
import { ISendNoti } from '../../../interfaces/notification';
import { RootState } from '../../../redux/modules/reducer';
import { getSocket } from '../../../util/util';
import UserProfilePresenter from './UserProfilePresenter';

const UserProfileContainer = () => {
    const { me, user, modifyProfileDone } = useSelector((state: RootState) => state.user);

    const [showProfileModal, showProfileModalToggle, setShowProfileModal] = useToggle(false);

    useEffect(() => {
        if (modifyProfileDone) {
            setShowProfileModal(false);
        }
    }, [modifyProfileDone]);

    const { socket, headers } = getSocket();

    const friendRequest = useCallback(() => {
        if (me) {
            const newNoti: ISendNoti = {
                type: 'FRIEND_REQUEST',
                from: me.id,
                to: user.id,
                targetId: null,
                message: '',
            };
            socket.send('/pub/notification', headers, JSON.stringify(newNoti));
        }
    }, []);

    return (
        <UserProfilePresenter
            user={user}
            isMe={me?.id === user?.id}
            showProfileModal={showProfileModal}
            showProfileModalToggle={showProfileModalToggle}
            friendRequest={friendRequest}
        />
    );
};

export default UserProfileContainer;
