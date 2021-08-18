/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import { useDispatch } from 'react-redux';

import React, { useEffect, useState } from 'react';
import { IPost } from '../../../../interfaces/data/post';
import useToggle from '../../../../hooks/useToggle';
import { IComment } from '../../../../interfaces/data/comment';
import { createSampleComments } from '../../../../util/sample';
import CommentBox from '../commentBox';
import CommentForm from '../commentForm';
import ToolTip from '../../../common/ToolTip';
import PostCardModal from '../postCardModal';
import PostHeader from '../postHeader';
import { Body, Footer, ImageContainer, Wrapper } from './style';
import { IconFavorite, IconMore } from '../../../common/Icon';

type Props = {
    post: IPost;
};

const PostCard = ({ post }: Props) => {
    const dispatch = useDispatch();
    const [commentBox, onChangeCommentBox] = useToggle(false);
    const [comments, setComments] = useState<IComment[] | null>(null);
    const [modal, setModal] = useState(false);
    // const { me, accessToken } = useSelector((state) => state.user);

    // const [editMode, setEditMode] = useState(false);

    // // 포스트 수정
    // const onClickUpdate = useCallback(() => {
    //     setEditMode(true);
    // }, []);
    // const onCancelUpdate = useCallback(() => {
    //     setEditMode(false);
    // }, []);
    // const onChangePost = useCallback(
    //     (editText) => () => {
    //         const data = new FormData();
    //         data.append('content', editText);
    //         dispatch(updatePost(post._id, data, accessToken));
    //     },
    //     [post],
    // );

    // // 포스트 삭제
    // const onRemovePost = useCallback(() => {
    //     dispatch(removePost(post._id, accessToken));
    // }, [post]);

    // // 좋아요 기능
    // const onLike = useCallback(() => {
    //     dispatch(likePost(post._id, accessToken));
    // }, []);
    // const onUnlike = useCallback(() => {
    //     dispatch(unlikePost(post._id, accessToken));
    // }, []);

    // // 댓글 기능
    // const [commentFormOpened, setCommentFormOpened] = useState(false);
    // const onToggleComment = useCallback(() => {
    //     setCommentFormOpened((prev) => !prev);
    // }, []);

    useEffect(() => {
        if (commentBox) {
            setComments(createSampleComments(post.commentCnt));
        }
    }, [commentBox, post.commentCnt]);

    const openPostCardModal = () => {
        setModal(true);
    };
    const closePostCardModal = () => {
        setModal(false);
    };

    return (
        <Wrapper mood={post.mood}>
            <PostHeader post={post} />
            <Body>
                <p>{post.content}</p>
                <ImageContainer
                    className={post.image.length > 2 ? 'more' : post.image.length > 1 ? 'double' : ''}
                    onClick={openPostCardModal}
                >
                    {post.image[0] && (
                        <div>
                            {/* <Image width={640} height={640} src={post.image[0]} alt="postimage" /> */}
                            <img src={post.image[0]} alt="postimage" />
                        </div>
                    )}
                    {post.image[1] && (
                        <div>
                            {/* <Image width={640} height={640} src={post.image[0]} alt="postimage" /> */}
                            <img src={post.image[1]} alt="postimage" />
                        </div>
                    )}
                    {post.image[2] && (
                        <div>
                            {/* <Image width={640} height={640} src={post.image[0]} alt="postimage" /> */}
                            <img src={post.image[2]} alt="postimage" />
                            <span>+</span>
                        </div>
                    )}
                </ImageContainer>
            </Body>
            <Footer>
                <IconFavorite />
                <span className="like-cnt">12</span>
                <ToolTip message="댓글 열기/닫기">
                    <span className="comment-cnt" onClick={onChangeCommentBox}>
                        댓글 {post.commentCnt}개
                    </span>
                </ToolTip>
                <div className="form-wrapper">
                    <CommentForm postId={post.id} />
                </div>
                <IconMore />
            </Footer>
            {commentBox && comments && <CommentBox comments={comments} ht="128px" />}
            {modal && <PostCardModal post={post} comments={comments} onClose={closePostCardModal} />}
        </Wrapper>
    );
};

export default PostCard;
