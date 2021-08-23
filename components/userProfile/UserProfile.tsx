import styled from 'styled-components';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

import ProfileEditModal from './ProfileEditModal';
import { RootState } from '../../reducers';
import Avatar from '../common/Avatar';

const UserProfile = () => {
    const { me } = useSelector((state: RootState) => state.user);

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Wrapper>
                <Avatar url={me?.avator} size={130} />
                <ProfileInfo>
                    <Username>{me.username}</Username>
                    <ProfileEditButton
                        onClick={() => {
                            setShowModal(true);
                        }}
                    >
                        수정
                    </ProfileEditButton>
                </ProfileInfo>
                <>{me.bio ? <Bio>{me.bio}</Bio> : <Bio>만나서 반가워요!</Bio>}</>
            </Wrapper>
            {showModal && <ProfileEditModal />}
        </>
    );
};

const Wrapper = styled.div`
    ${({ theme }) => theme.flexCenter}
    flex-direction: column;
    width: 80%;
    height: 18rem;
    box-shadow: 0px 4px 2px rgba(119, 119, 119, 0.25);
`;

const ProfileInfo = styled.div`
    padding-top: 1.6rem;
    display: flex;
    align-items: center;
`;

const Username = styled.div`
    margin: 0 1rem;
    color: #424242;
    font-size: 1.8rem;
    font-weight: 600;
`;

const Bio = styled.div`
    margin-top: 1rem;
    font-size: 1rem;
    color: #444;
`;

const ProfileEditButton = styled.button`
    font-size: 0.9rem;
    border-style: none;
    border-radius: 0.4rem;
    height: 2rem;
    width: 3rem;
    background-color: #a18afc;
    opacity: 0.7;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #a18afc;
        opacity: 1;
    }
`;

export default UserProfile;
