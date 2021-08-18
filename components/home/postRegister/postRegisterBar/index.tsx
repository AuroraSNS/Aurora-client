import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers';
import PostRegisterModal from '../PostRegisterModal';
import { Avatar, Wrapper } from './style';

const PostBar = () => {
    const { me } = useSelector((state: RootState) => state.user);
    const [modal, setModal] = useState(false);

    const openPostCardModal = () => {
        console.log('open');
        setModal(true);
    };
    const closePostCardModal = () => {
        console.log('close');
        setModal(false);
    };
    console.log(modal);
    return (
        <>
            <Wrapper onClick={openPostCardModal}>
                <Avatar src={me?.avator} alt="avatar" />
                <span>{me?.name}님, 오늘 당신의 날씨는 어떤가요?</span>
            </Wrapper>
            {modal && <PostRegisterModal onClose={closePostCardModal} />}
        </>
    );
};

export default PostBar;
