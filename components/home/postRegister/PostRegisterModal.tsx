import React from 'react';

import PostRegisterForm from './PostRegisterForm';
import Modal from '../../Modal';

type Props = {
    onClose: () => void;
};

const PostRegisterModal = ({ onClose }: Props) => (
    <Modal onClose={onClose}>
        <PostRegisterForm />
    </Modal>
);

export default PostRegisterModal;
