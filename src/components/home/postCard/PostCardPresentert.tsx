/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import React from 'react';
import { IPost } from '../../../interfaces/post';
import ConfirmModal from '../../common/ConfirmModal';
import { IconDislike, IconLike, IconMore } from '../../common/Icon';
import PostFormModalContainer from '../../common/postFormModal/PostFormModalContainer';
import ToolTip from '../../common/ToolTip';
import CommentBoxContainer from './commentBox/CommentBoxContainer';
import CommentFormContainer from './commentForm/CommentFormContainer';
import PostCardModalContainer from './postCardModal/PostCardModalContainer';
import PostHeaderContainer from './postHeader/PostHeaderContainer';

import { Body, Footer, ImageContainer, Wrapper } from './style';

type Props = {
    isMe: boolean;
    post: IPost;
    commentCnt: number;
    commentBox: boolean;
    onChangeCommentBox: () => void;
    showModal: boolean;
    showModalToggle: () => void;
    showMoreOptions: boolean;
    showMoreOptionsToggle: () => void;
    showModifyModal: boolean;
    showModifyModalToggle: () => void;
    showRemoveModal: boolean;
    showRemoveModalToggle: () => void;
    removeOk: (id: number) => void;
    isLike: boolean;
    onClickLike: (v: boolean) => void;
};

const PostCardPresentert = ({
    isMe,
    post,
    commentCnt,
    commentBox,
    onChangeCommentBox,
    showModal,
    showModalToggle,
    showMoreOptions,
    showMoreOptionsToggle,
    showModifyModal,
    showModifyModalToggle,
    showRemoveModal,
    showRemoveModalToggle,
    removeOk,
    isLike,
    onClickLike,
}: Props) => (
    <Wrapper mood={post.mood}>
        <PostHeaderContainer post={post} />
        <Body>
            <p>{post.content}</p>
            <ImageContainer
                className={post.images.length > 2 ? 'more' : post.images.length > 1 ? 'double' : ''}
                onClick={showModalToggle}
            >
                {post.images[0] && (
                    <div className="imgBox">
                        <Image width={625} height={625} src={post.images[0]} alt="postimage" />
                    </div>
                )}
                {post.images[1] && (
                    <div className="imgBox">
                        <Image width={625} height={625} src={post.images[1]} alt="postimage" />
                    </div>
                )}
                {post.images[2] && (
                    <div className="imgBox">
                        <Image width={625} height={625} src={post.images[2]} alt="postimage" />
                        <span>+</span>
                    </div>
                )}
            </ImageContainer>
        </Body>
        <Footer>
            {isLike ? (
                <div onClick={() => onClickLike(false)}>
                    <IconLike />
                </div>
            ) : (
                <div onClick={() => onClickLike(true)}>
                    <IconDislike />
                </div>
            )}
            <span className="like-cnt">{post.likeCnt}</span>
            <ToolTip message="댓글 열기/닫기">
                <span className="comment-cnt" onClick={onChangeCommentBox}>
                    댓글 {post.commentCnt}개
                </span>
            </ToolTip>
            <div className="form-wrapper">
                <CommentFormContainer postId={post.id} />
            </div>
            {isMe && (
                <button type="button" onClick={showMoreOptionsToggle}>
                    <IconMore />
                </button>
            )}
            {showMoreOptions && (
                <>
                    <div className="overlay" onClick={showMoreOptionsToggle} />
                    <div className="more-options">
                        <div onClick={showModifyModalToggle}>게시물 수정</div>
                        <div onClick={showRemoveModalToggle}>게시물 삭제</div>
                    </div>
                </>
            )}
            {showRemoveModal && (
                <ConfirmModal
                    text="정말로 삭제하시겠습니까?"
                    onOk={() => {
                        removeOk(post.id);
                    }}
                    onCancel={showRemoveModalToggle}
                />
            )}
        </Footer>
        {commentBox && <CommentBoxContainer postId={post.id} ht="128px" />}
        {showModal && <PostCardModalContainer post={post} onClose={showModalToggle} />}
        {showModifyModal && <PostFormModalContainer post={post} onClose={showModifyModalToggle} />}
    </Wrapper>
);
export default PostCardPresentert;
