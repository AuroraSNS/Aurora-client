import styled from 'styled-components';
import { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import PostRegisterForm from './PostRegisterForm';
import { postRegisterModalClose } from '../../../actions/modal';

const PostRegisterModal = () => {
    const dispatch = useDispatch();

    const onClose = useCallback(() => {
        dispatch(postRegisterModalClose());
    }, [dispatch]);

    return (
        <StyledModalOverlay>
            <StyledModal>
                <StyledModalCloseBtn onClick={onClose}>&times;</StyledModalCloseBtn>
                <PostRegisterForm />
            </StyledModal>
        </StyledModalOverlay>
    );
};

const StyledModalCloseBtn = styled.button`
    position: absolute;
    top: 14px;
    right: 14px;
    width: 30px;
    font-weight: 700;
    color: #999;
    background-color: transparent;
    &:hover {
        color: #505050;
    }
`;

const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.7);
    animation: overlay-show 0.3s;
    @keyframes overlay-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    z-index: 1;
`;

const StyledModal = styled.div`
    width: 286px;
    margin-top: 236px;
    position: relative;
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export default PostRegisterModal;
