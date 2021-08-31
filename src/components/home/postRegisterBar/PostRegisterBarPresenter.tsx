import React from 'react';
import { IMe } from '../../../interfaces/user';
import Avatar from '../../common/Avatar';
import PostFormModalContainer from '../../common/postFormModal/PostFormModalContainer';
import { Wrapper } from './style';

type Props = {
    openPostCardModal: () => void;
    closePostCardModal: () => void;
    me: IMe;
    modal: boolean;
};

const PostRegisterBarPresenter = ({ openPostCardModal, closePostCardModal, me, modal }: Props) => (
    <>
        <Wrapper onClick={openPostCardModal}>
            <Avatar url={me?.avatar} size={44} />
            <span>오늘 당신의 날씨는 어떤가요?</span>
        </Wrapper>
        {modal && <PostFormModalContainer isFirst onClose={closePostCardModal} />}
    </>
);
export default PostRegisterBarPresenter;
