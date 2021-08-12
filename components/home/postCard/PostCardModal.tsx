import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IComment } from '../../../interfaces/data/comment';
import { IPost } from '../../../interfaces/data/post';
import Modal from '../../Modal';

type Props = {
    post: IPost;
    comments: IComment[] | null;
    onClose: () => void;
};

const PostCardModal = ({ post, comments, onClose }: Props) => {
    const dispatch = useDispatch();

    return <Modal onClose={onClose}>hi</Modal>;
};

export default PostCardModal;
