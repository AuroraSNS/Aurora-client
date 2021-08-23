import React from 'react';
import { IMe } from '../../../interfaces/data/user';
import { Avatar, Wrapper } from './style';

type Props = {
    openPostCardModal: () => void;
    closePostCardModal: () => void;
    me: IMe;
    modal: boolean;
};

const PostRegisterBarPresenter = ({ openPostCardModal, closePostCardModal, me, modal }: Props) => (
    <Wrapper onClick={openPostCardModal}>
        <Avatar src={me?.avator || '/images/defaultProfile.png'} alt="avatar" />
        {me ? <span>{me.name}님, 오늘 당신의 날씨는 어떤가요?</span> : <span>로그인하고 글을 올려보세요</span>}
        {modal && <PostRegisterModal onClose={closePostCardModal} />}
    </Wrapper>
);
export default PostRegisterBarPresenter;
