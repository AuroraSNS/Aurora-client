import React from 'react';
import { IUserProfile } from '../../../interfaces/user';
import Avatar from '../../common/Avatar';
import ProfileEditModalContainer from './profileEditModal/ProfileEditModalContainer';
import { Wrapper } from './style';

type Props = {
    user: IUserProfile;
    isMe: boolean;
    showProfileModal: boolean;
    showProfileModalToggle: () => void;
    friendRequest: () => void;
};

const UserProfilePresenter = ({ user, isMe, showProfileModal, showProfileModalToggle, friendRequest }: Props) => (
    <Wrapper>
        <Avatar url={user?.avatar} size={130} />
        <div className="profile-info">
            <div>
                <span className="name">{user?.name}</span>
                {isMe && (
                    <button className="editBtn" type="button" onClick={showProfileModalToggle}>
                        수정
                    </button>
                )}
            </div>
            <p className="bio">{user?.bio}</p>
            {!isMe && (
                <button className="friend" type="button" onClick={friendRequest}>
                    친구신청
                </button>
            )}
        </div>
        {showProfileModal && <ProfileEditModalContainer onClose={showProfileModalToggle} />}
    </Wrapper>
);

export default UserProfilePresenter;
