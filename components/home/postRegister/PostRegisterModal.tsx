import React from 'react';

import PostRegisterForm from './postRegisterForm';
import Modal from '../../common/Modal';

type Props = {
    onClose: () => void;
};

const PostRegisterModal = ({ onClose }: Props) => (
    <Modal onClose={onClose}>
        <PostRegisterForm />
    </Modal>
);

export default PostRegisterModal;
