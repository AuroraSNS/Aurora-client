/* eslint-disable no-param-reassign */
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useToggle from '../../../hooks/useToggle';
import { IPost } from '../../../interfaces/data/post';
import { likePostRequest, removePostRequest } from '../../../redux/modules/post';
import { RootState } from '../../../redux/modules/reducer';
import PostCardPresentert from './PostCardPresentert';

type Props = {
    post: IPost;
};

const PostCardContainer = ({ post }: Props) => {
    const dispatch = useDispatch();

    const { me } = useSelector((state: RootState) => state.user);
    const { modifyPostDone } = useSelector((state: RootState) => state.post);
    const { commentCnt } = useSelector((state: RootState) => state.comment);

    const [commentBox, onChangeCommentBox] = useToggle(false);
    const [showModal, showModalToggle] = useToggle(false);
    const [showMoreOptions, showMoreOptionsToggle] = useToggle(false);
    const [showModifyModal, showModifyModalToggle, setShowModifyModal] = useToggle(false);
    const [showRemoveModal, showRemoveModalToggle] = useToggle(false);
    const removeOk = useCallback(
        (id: number) => {
            dispatch(removePostRequest(id));
            showRemoveModalToggle();
            showMoreOptionsToggle();
        },
        [dispatch],
    );

    useEffect(() => {
        if (modifyPostDone) {
            setShowModifyModal(false);
        }
    }, [modifyPostDone]);

    const onClickLike = useCallback(() => {
        if (me) {
            // dispatch(likePostRequest(post.id, me.likeList.includes(post.id)));
            dispatch(likePostRequest(post.id, true));
        }
    }, []);
    return (
        <PostCardPresentert
            isMe={me?.id === post.auth.id}
            post={post}
            commentCnt={commentCnt}
            commentBox={commentBox}
            onChangeCommentBox={onChangeCommentBox}
            showModal={showModal}
            showModalToggle={showModalToggle}
            showMoreOptions={showMoreOptions}
            showMoreOptionsToggle={showMoreOptionsToggle}
            showModifyModal={showModifyModal}
            showModifyModalToggle={showModifyModalToggle}
            showRemoveModal={showRemoveModal}
            showRemoveModalToggle={showRemoveModalToggle}
            removeOk={removeOk}
            isLike
            // isLike={me.likeList.includes(post.id)}
            onClickLike={onClickLike}
        />
    );
};
export default PostCardContainer;
