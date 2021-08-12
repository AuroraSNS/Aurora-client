/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import React, { useEffect, useState } from 'react';
import { IconCloud, IconFavorite, IconMoon, IconMore, IconRain, IconSun } from '../../Icon';
import { IPost } from '../../../interfaces/data/post';
import useToggle from '../../../hooks/useToggle';
import { IComment } from '../../../interfaces/data/comment';
import { createSampleComments } from '../../../util/sample';
import CommentBox from './comment/CommentBox';
import CommentForm from './comment/CommentForm';
import ToolTip from '../../ToolTip';
import PostCardModal from './PostCardModal';

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
            <Header>
                <img src={post.auth.avator} alt="avator" />
                <div>
                    <span>{post.auth.name}</span>
                    <span>22 mins ago</span>
                </div>
                {post.mood === 'sun' && <IconSun />}
                {post.mood === 'cloud' && <IconCloud />}
                {post.mood === 'rain' && <IconRain />}
                {post.mood === 'moon' && <IconMoon />}
            </Header>
            <Body>
                <p>{post.content}</p>
                <ImageContainer
                    className={post.image.length > 2 ? 'more' : post.image.length > 1 ? 'double' : ''}
                    onClick={openPostCardModal}
                >
                    {post.image[0] && (
                        <div>
                            <img src={post.image[0]} alt="postimage" />
                        </div>
                    )}
                    {post.image[1] && (
                        <div>
                            <img src={post.image[1]} alt="postimage" />
                        </div>
                    )}
                    {post.image[2] && (
                        <div>
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

                <CommentForm postId={post.id} />
                <IconMore />
            </Footer>
            {commentBox && comments && <CommentBox comments={comments} />}
            {modal && <PostCardModal post={post} comments={comments} onClose={closePostCardModal} />}
        </Wrapper>
    );
};

const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    .like-cnt {
        margin-left: 5px;
        margin-right: 10px;
    }
    .comment-cnt {
        color: #707070;
        cursor: pointer;
    }
    svg {
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        .comment-cnt {
            font-size: 11px;
        }
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    div {
        position: relative;
        width: 100%;
        &:before {
            content: '';
            display: block;
            padding-top: 100%;
        }
        img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            object-fit: cover;
        }
    }
    div &.double {
        img {
            padding: 0 5px;
        }
    }
    &.more {
        div:first-child {
            margin-right: 9px;
        }
        div:nth-child(2) {
            margin-right: 9px;
        }
        div:nth-child(3) {
            width: 20%;
            overflow: hidden;
            img {
                position: absolute;
                object-fit: cover;
                opacity: 0.3;
            }

            & > span {
                top: 35%;
                left: 30%;
                position: absolute;
                font-size: 36px;
                z-index: 1;
            }
        }
    }
`;

const Wrapper = styled.article<{ mood: string }>`
    /* border: 1px solid gray; */
    width: 100%;
    border-radius: 20px;
    margin: 15px;
    padding: 37px 46px;
    box-shadow: 0 0 30px
        ${(props) => {
            if (props.mood === 'sun') return 'rgba(237, 154, 154, 0.5)';
            if (props.mood === 'cloud') return 'rgba(177, 176, 176, 0.7)';
            if (props.mood === 'rain') return 'rgba(154, 198, 240, 0.5)';
            if (props.mood === 'moon') return 'rgba(172, 141, 224, 0.5)';
        }};
`;

const Header = styled.div`
    /* border: 1px solid gray; */
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        margin-right: 12px;
    }
    div {
        display: flex;
        flex-direction: column;
        & > span:first-child {
            font-weight: 600;
            font-size: 14px;
        }
        & > span:last-child {
            font-size: 12px;
            color: #707070;
        }
    }
    svg {
        position: absolute;
        right: 0;
    }
`;

const Body = styled.div`
    /* border: 1px solid gray; */
    margin: 30px 0;
    font-size: 16px;
`;

export default PostCard;
