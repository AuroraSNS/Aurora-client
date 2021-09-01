import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useToggle from '../../../hooks/useToggle';
import { ISendNoti } from '../../../interfaces/notification';
import { removeFriendRequest } from '../../../redux/modules/friend';
import { RootState } from '../../../redux/modules/reducer';
import { loadUserProfileRequest } from '../../../redux/modules/user';
import { getToken } from '../../../redux/sagas';
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
                message: '',
            };
            socket.send('/pub/notification', headers, JSON.stringify(newNoti));
            setTimeout(() => {
                dispatch(loadUserProfileRequest(user.id, getToken() as string));
            }, 1000);
        }
    }, []);

    const dispatch = useDispatch();

    const removeFriend = useCallback((id: number) => {
        dispatch(removeFriendRequest(id));
    }, []);

    return (
        <UserProfilePresenter
            user={user}
            me={me}
            showProfileModal={showProfileModal}
            showProfileModalToggle={showProfileModalToggle}
            friendRequest={friendRequest}
            removeFriend={removeFriend}
        />
    );
};

export default UserProfileContainer;
