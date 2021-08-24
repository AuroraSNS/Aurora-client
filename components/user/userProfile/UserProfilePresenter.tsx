import React from 'react';
import { IUserProfile } from '../../../interfaces/data/user';
import Avatar from '../../common/Avatar';
import ProfileEditModalContainer from './profileEditModal/ProfileEditModalContainer';
import { Wrapper } from './style';

type Props = {
    user: IUserProfile;
    isMe: boolean;
    showProfileModal: boolean;
    showProfileModalToggle: () => void;
};

const UserProfilePresenter = ({ user, isMe, showProfileModal, showProfileModalToggle }: Props) => (
    <Wrapper>
        <Avatar url={user.avatar} size={130} />
        <div className="profile-info">
            <div>
                <span className="name">{user.name}</span>
                {isMe && (
                    <button className="editBtn" type="button" onClick={showProfileModalToggle}>
                        수정
                    </button>
                )}
            </div>
            <p className="bio">{user.bio}</p>
        </div>
        {showProfileModal && <ProfileEditModalContainer onClose={showProfileModalToggle} />}
    </Wrapper>
);

export default UserProfilePresenter;
