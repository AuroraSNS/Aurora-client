/* eslint-disable no-nested-ternary */
import moment from 'moment';
import styled from 'styled-components';
import { Button, Card, Popover, List, Comment } from 'antd';
import { HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { useCallback, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommentContent from './CommentContent';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import { removePost, updatePost, unlikePost, likePost } from '../../../actions/post';
import { IconCloud, IconMoon, IconRain, IconSun } from '../../Icon';

const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    // const { likePosts, removePostLoading } = useSelector((state) => state.post);
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

    // const minutesGap = Math.floor(moment.duration(moment().diff(post.updatedAt)).asMinutes());
    // let timeMsg = '';
    // switch (true) {
    //     // ~ 1 min
    //     case minutesGap < 1:
    //         timeMsg = 'Now';
    //         break;
    //     // ~ 1 hour
    //     case minutesGap < 1 * 60:
    //         timeMsg = `${minutesGap} ${minutesGap === 1 ? 'min' : 'mins'} ago`;
    //         break;
    //     // ~ 1 day
    //     case minutesGap < 1 * 60 * 24: {
    //         const hour = Math.trunc(minutesGap / 60);
    //         timeMsg = `${hour} ${hour === 1 ? 'hour' : 'hours'} ago`;
    //         break;
    //     }

    //     // ~ 2 day (yesterday)
    //     case minutesGap < 1 * 60 * 24 * 2:
    //         timeMsg = '어제';
    //         break;
    //     // ~ 7 days
    //     case minutesGap < 1 * 60 * 24 * 7: {
    //         const day = Math.trunc(minutesGap / 60 / 24);
    //         timeMsg = `${day} ${day === 1 ? 'day' : 'days'} ago`;
    //         break;
    //     }
    //     // ex) 2021/1/20
    //     default: {
    //         const createdDate = new Date(twitt.createdAt);
    //         const year = createdDate.getFullYear();
    //         const month = createdDate.getMonth();
    //         const days = createdDate.getDate();
    //         timeMsg = `${year} /${month + 1}/${days}`;
    //         break;
    //     }
    // }

    // const commentStyle = useMemo(() => ({ padding: '0 10px' }), []);
    // const liked = likePosts.find((v) => v === post._id);
    console.log(post);
    return (
        <Wrapper weather={post.weather}>
            <Header>
                <img src={post.auth.avator} alt="avator" />
                <div>
                    <span>{post.auth.name}</span>
                    <span>22 mins ago</span>
                </div>
                {post.weather === 'sun' && <IconSun />}
                {post.weather === 'cloud' && <IconCloud />}
                {post.weather === 'rain' && <IconRain />}
                {post.weather === 'moon' && <IconMoon />}
            </Header>
            <Body>
                <p>{post.content}</p>
                <ImageContainer className={post.image.length > 2 ? 'more' : post.image.length > 1 ? 'double' : ''}>
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
            {/* <Card
                cover={<PostImages images={post.images} />}
                actions={[
                    liked ? (
                        <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} />
                    ) : (
                        <HeartOutlined key="heart" onClick={onLike} />
                    ),
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    post.postedBy._id === me._id && (
                        <Popover
                            key="more"
                            content={
                                <Button.Group>
                                    <Button onClick={onClickUpdate}>수정</Button>
                                    <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>
                                        삭제
                                    </Button>
                                </Button.Group>
                            }
                        >
                            <EllipsisOutlined />
                        </Popover>
                    ),
                ]}
            >
                {editMode ? (
                    <Card.Meta
                        description={
                            <PostCardContent
                                editMode={editMode}
                                postData={post.content}
                                onChangePost={onChangePost}
                                onCancelUpdate={onCancelUpdate}
                            />
                        }
                    />
                ) : (
                    <Card.Meta description={<PostCardContent postData={post.content} />} />
                )}
            </Card> */}
            {/* {commentFormOpened && (
                <>
                    <CommentForm post={post} />
                    <List
                        header={`${post.comments.length} 개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    style={commentStyle}
                                    author={item.commentedBy.username}
                                    content={<CommentContent item={item} postId={post._id} />}
                                />
                            </li>
                        )}
                    />
                </>
            )} */}
        </Wrapper>
    );
};

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    img {
        width: 274px;
        height: 274px;
    }
    &.double {
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
            position: relative;
            overflow: hidden;
            width: 60px;
            object-fit: cover;
            img {
                opacity: 0.3;
            }

            & > span {
                top: 115px;
                left: 20px;
                position: absolute;
                font-size: 36px;
                z-index: 1;
            }
        }
    }
`;

const Wrapper = styled.article<{ weather: string }>`
    /* border: 1px solid gray; */
    width: 100%;
    border-radius: 20px;
    margin: 15px;
    padding: 37px 46px;
    box-shadow: 0 0 30px
        ${(props) => {
            if (props.weather === 'sun') return 'rgba(237, 154, 154, 0.5)';
            if (props.weather === 'moon') return 'rgba(172, 141, 224, 0.5)';
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
