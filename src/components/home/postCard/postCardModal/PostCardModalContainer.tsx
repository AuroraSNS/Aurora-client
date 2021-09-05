import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IPost } from '../../../../interfaces/post';
import { likePostRequest } from '../../../../redux/modules/post';
import { RootState } from '../../../../redux/modules/reducer';
import PostCardModalPresenter from './PostCardModalPresenter';

type Props = {
    post: IPost;
    onClose: () => void;
};

const PostCardModalContainer = ({ post, onClose }: Props) => {
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);
    const { commentCnt } = useSelector((state: RootState) => state.comment);

    const onClickLike = useCallback(
        (islike: boolean) => {
            if (me) {
                // dispatch(likePostRequest(post.id, me.likeList.includes(post.id)));
                dispatch(likePostRequest(post.id, islike));
            }
        },
        [me, post],
    );

    return (
        <PostCardModalPresenter
            onClose={onClose}
            post={post}
            commentCnt={commentCnt}
            isLike={me?.likeList.includes(post.id) || false}
            onClickLike={onClickLike}
        />
    );
};
export default PostCardModalContainer;
