import React from 'react';
import { IPost } from '../../../../interfaces/post';
import PostHeaderPresenter from './PostHeaderPresenter';

type Props = {
    post: IPost;
};

const PostHeaderContainer = ({ post }: Props) => <PostHeaderPresenter post={post} />;

export default PostHeaderContainer;
