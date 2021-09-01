import React from 'react';
import { IMe, IUserProfile } from '../../../interfaces/user';
import Avatar from '../../common/Avatar';
import ProfileEditModalContainer from './profileEditModal/ProfileEditModalContainer';
import { Wrapper } from './style';

type Props = {
    user: IUserProfile;
    me: IMe | null;
    showProfileModal: boolean;
    showProfileModalToggle: () => void;
    friendRequest: () => void;
    removeFriend: (friendId: number) => void;
};

const UserProfilePresenter = ({
    user,
    me,
    showProfileModal,
    showProfileModalToggle,
    friendRequest,
    removeFriend,
}: Props) => (
    <Wrapper>
        <Avatar url={user?.avatar} size={130} />
        <div className="profile-info">
            <div>
                <span className="name">{user?.name}</span>
                {me?.id === user?.id && (
                    <button className="editBtn" type="button" onClick={showProfileModalToggle}>
                        수정
                    </button>
                )}
            </div>
            <p className="bio">{user?.bio}</p>
            {me?.id !== user?.id && user?.status === 'FRIEND' && (
                <button
                    className="friend"
                    type="button"
                    onClick={() => {
                        removeFriend(user?.id);
                    }}
                >
                    친구 끊기
                </button>
            )}
            {me?.id !== user?.id && user?.status === 'NOT_FRIEND' && (
                <button className="friend" type="button" onClick={friendRequest}>
                    친구신청
                </button>
            )}
            {me?.id !== user?.id && user?.status === 'ONGOING' && (
                <button className="friend" type="button">
                    친구수락 대기중
                </button>
            )}
        </div>
        {showProfileModal && <ProfileEditModalContainer onClose={showProfileModalToggle} />}
    </Wrapper>
);

export default UserProfilePresenter;
