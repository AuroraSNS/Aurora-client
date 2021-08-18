import React from 'react';
import { IComment } from '../../../../interfaces/data/comment';
import { IPost } from '../../../../interfaces/data/post';

import { IconNotFavorite } from '../../../common/Icon';
import Modal from '../../../common/Modal';
import CommentBox from '../commentBox';
import CommentForm from '../commentForm';
import ImageSlider from '../imageSlider';
import PostHeader from '../postHeader';
import { Container, Wrapper } from './style';

type Props = {
    post: IPost;
    comments: IComment[] | null;
    onClose: () => void;
};

const PostCardModal = ({ post, comments, onClose }: Props) => (
    <Modal onClose={onClose}>
        <Wrapper>
            <ImageSlider images={post.image} />
            <Container>
                <PostHeader post={post} />
                <div className="content">
                    <p>{post.content}</p>
                </div>
                <div>
                    <IconNotFavorite />
                    <span className="comment-cnt">댓글 {post.commentCnt}개</span>
                </div>
                <CommentForm postId={post.id} />
                {comments && <CommentBox comments={comments} vertical />}
            </Container>
        </Wrapper>
    </Modal>
);

export default PostCardModal;
