import React from 'react';
import { IPost } from '../../../../interfaces/data/post';
import PostCardModalPresenter from './PostCardModalPresenter';

type Props = {
    post: IPost;
    onClose: () => void;
};

const PostCardModalContainer = ({ post, onClose }: Props) => <PostCardModalPresenter onClose={onClose} post={post} />;
export default PostCardModalContainer;
