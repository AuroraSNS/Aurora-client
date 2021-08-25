import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likePostRequest } from '../../../../actions/post';
import { IPost } from '../../../../interfaces/data/post';
import { RootState } from '../../../../reducers';
import PostCardModalPresenter from './PostCardModalPresenter';

type Props = {
    post: IPost;
    onClose: () => void;
};

const PostCardModalContainer = ({ post, onClose }: Props) => {
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);
    const { commentCnt } = useSelector((state: RootState) => state.comment);

    const onClickLike = useCallback(() => {
        if (me) {
            // dispatch(likePostRequest(post.id, me.likeList.includes(post.id)));
            dispatch(likePostRequest(post.id, true));
        }
    }, []);

    return (
        <PostCardModalPresenter
            onClickLike={onClickLike}
            onClose={onClose}
            post={post}
            commentCnt={commentCnt}
            isLike
            // isLike={me.likeList.includes(post.id)}
        />
    );
};
export default PostCardModalContainer;
