import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IComment } from '../../../interfaces/data/comment';
import { IPost } from '../../../interfaces/data/post';
import { RootState } from '../../../reducers';
import { IconFavorite, IconNotFavorite } from '../../Icon';
import Modal from '../../Modal';
import CommentBox from './comment/CommentBox';
import CommentForm from './comment/CommentForm';
import ImageSlider from './ImageSlider';
import PostHeader from './PostHeader';

type Props = {
    post: IPost;
    comments: IComment[] | null;
    onClose: () => void;
};

const PostCardModal = ({ post, comments, onClose }: Props) => {
    const dispatch = useDispatch();
    return (
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
};

const Container = styled.div`
    width: 30%;
    max-width: 285px;
    height: 100%;
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    padding: 30px;
    & > div {
        display: flex;
        align-items: center;
        margin: 10px 0;
        span {
            font-size: 12px;
            color: #707070;
            margin-left: 18px;
        }
    }
    .content {
        max-height: 200px;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 6px; /*스크롤바의 너비*/
        }

        &::-webkit-scrollbar-thumb {
            /* 스크롤바 */
            background-color: #f0f2f5;
            /* background-clip: padding-box;
        border: 1px solid transparent; */
            border-radius: 20px;
        }

        &::-webkit-scrollbar-track {
            /* 스크롤바 바탕 */
            background-color: transparent;
        }
    }
`;

const Wrapper = styled.div`
    /* border: 1px solid gray; */
    width: 90vw;
    height: 80vh;
    box-shadow: 0 0 30px 5px rgba(82, 82, 82, 0.15);
    background-color: white;
    border-radius: 20px;
    /* padding: 0 20px; */
    display: flex;
    @media screen and (max-width: 1240px) {
        width: 100vw;
        height: 100vh;
    }
`;

export default PostCardModal;
