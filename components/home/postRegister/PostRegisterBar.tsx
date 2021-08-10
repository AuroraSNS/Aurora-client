import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import PostRegisterModal from './PostRegisterModal';
import { RootState } from '../../../reducers';

const PostBar = () => {
    const { me } = useSelector((state: RootState) => state.user);
    const [showModal, setShowModal] = useState(false);

    const onClickModal = useCallback(() => {
        setShowModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);

    return (
        <>
            <Wrapper onClick={onClickModal}>
                <>
                    {me?.avatar[0] ? (
                        <Avatar
                            src={`data:image/png;base64,${Buffer.from(me.avatar[0].data.data).toString('base64')}`}
                            alt="avatar"
                        />
                    ) : (
                        <Avatar src="/images/profile-thumbnail.jpg" alt="avatar" />
                    )}
                </>
                <span>{me?.username}님, 오늘 당신의 날씨는 어떤가요?</span>
            </Wrapper>
            {showModal && <PostRegisterModal onClose={onCloseModal} />}
        </>
    );
};

const Wrapper = styled.div`
    width: 719px;
    height: 96px;
    background: #ffffff;
    box-shadow: 5px 5px 15px rgba(156, 156, 156, 0.25);
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 28px 46px 30px 38px;
    margin: 2rem 0 1rem;
    span {
        width: 575px;
        height: 38px;
        background: #f0f2f5;
        border-radius: 30px;
        padding-left: 24px;
        line-height: 38px;
    }
    &:hover {
        background-color: rgba(128, 128, 128, 0.2);
    }
    margin-bottom: 40px;
`;

const Avatar = styled.img`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 16px;
`;

export default PostBar;
