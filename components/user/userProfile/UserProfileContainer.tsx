import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadUserProfileRequest } from '../../../actions/user';
import useToggle from '../../../hooks/useToggle';
import { IUserProfile } from '../../../interfaces/data/user';
import { RootState } from '../../../reducers';
import UserProfilePresenter from './UserProfilePresenter';

type Props = {
    user: IUserProfile;
};

const UserProfileContainer = ({ user }: Props) => {
    const { me } = useSelector((state: RootState) => state.user);

    const [showProfileModal, showProfileModalToggle, setShowProfileModal] = useToggle(false);

    const { modifyProfileDone } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (modifyProfileDone) {
            setShowProfileModal(false);
            loadUserProfileRequest(me.id);
        }
    }, [modifyProfileDone]);

    return (
        <UserProfilePresenter
            user={user}
            isMe={me.id === user.id}
            showProfileModal={showProfileModal}
            showProfileModalToggle={showProfileModalToggle}
        />
    );
};

export default UserProfileContainer;
