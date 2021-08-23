import React from 'react';
import { IPost } from '../../../../interfaces/data/post';
import { IconNotFavorite } from '../../../common/Icon';
import Modal from '../../../common/Modal';
import ImageSliderContainer from './imageSlider/ImageSliderContainer';

import { Container, Wrapper } from './style';
import CommentFormContainer from '../commentForm/CommentFormContainer';
import CommentBoxContainer from '../commentBox/CommentBoxContainer';
import PostHeaderContainer from '../postHeader/PostHeaderContainer';

type Props = {
    onClose: () => void;
    post: IPost;
};

const PostCardModalPresenter = ({ onClose, post }: Props) => (
    <Modal onClose={onClose}>
        <Wrapper>
            <ImageSliderContainer images={post.images} />
            <Container>
                <PostHeaderContainer post={post} />
                <div className="content">
                    <p>{post.content}</p>
                </div>
                <div>
                    <IconNotFavorite />
                    <span className="comment-cnt">댓글 {post.commentCnt}개</span>
                </div>
                <CommentFormContainer postId={post.id} />
                <CommentBoxContainer postId={post.id} vertical />
            </Container>
        </Wrapper>
    </Modal>
);
export default PostCardModalPresenter;
