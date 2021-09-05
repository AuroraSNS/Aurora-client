/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IPost } from '../../../../interfaces/post';
import { IconDislike, IconLike } from '../../../common/Icon';
import Modal from '../../../common/Modal';
import ImageSliderContainer from './imageSlider/ImageSliderContainer';

import { Container, Wrapper } from './style';
import CommentFormContainer from '../commentForm/CommentFormContainer';
import CommentBoxContainer from '../commentBox/CommentBoxContainer';
import PostHeaderContainer from '../postHeader/PostHeaderContainer';

type Props = {
    onClose: () => void;
    post: IPost;
    commentCnt: number;
    isLike: boolean;
    onClickLike: (v: boolean) => void;
};

const PostCardModalPresenter = ({ onClickLike, onClose, post, commentCnt, isLike }: Props) => (
    <Modal onClose={onClose}>
        <Wrapper>
            <ImageSliderContainer images={post.images} />
            <Container>
                <PostHeaderContainer post={post} />
                <div className="content">
                    <p>{post.content}</p>
                </div>
                <div>
                    {isLike ? (
                        <div onClick={() => onClickLike(false)}>
                            <IconLike />
                        </div>
                    ) : (
                        <div onClick={() => onClickLike(true)}>
                            <IconDislike />
                        </div>
                    )}
                    <span className="comment-cnt">댓글 {post.commentCnt}개</span>
                </div>
                <CommentFormContainer postId={post.id} />
                <CommentBoxContainer postId={post.id} vertical />
            </Container>
        </Wrapper>
    </Modal>
);
export default PostCardModalPresenter;
