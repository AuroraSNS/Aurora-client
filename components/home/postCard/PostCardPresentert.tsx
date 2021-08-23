/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IComment } from '../../../interfaces/data/comment';
import { IPost } from '../../../interfaces/data/post';
import ConfirmModal from '../../common/ConfirmModal';
import { IconFavorite, IconMore } from '../../common/Icon';
import ToolTip from '../../common/ToolTip';
import CommentBoxContainer from './commentBox/CommentBoxContainer';
import CommentFormContainer from './commentForm/CommentFormContainer';
import PostCardModalContainer from './postCardModal/PostCardModalContainer';
import PostHeaderContainer from './postHeader/PostHeaderContainer';
import PostModifyModalContainer from './postModifyModal/PostModifyModalContainer';

import { Body, Footer, ImageContainer, Wrapper } from './style';

type Props = {
    post: IPost;
    commentBox: boolean;
    onChangeCommentBox: () => void;
    comments: IComment[];
    modal: boolean;
    openPostCardModal: () => void;
    closePostCardModal: () => void;
    moreOptions: boolean;
    moreOptionsToggle: () => void;
    modifyModal: boolean;
    openModifyModal: () => void;
    closeModifyModal: () => void;
    removeConfirm: boolean;
    openRemoveConfirm: () => void;
    removeOk: (id: number) => void;
    removeCancel: () => void;
};

const PostCardPresentert = ({
    post,
    commentBox,
    onChangeCommentBox,
    comments,
    modal,
    openPostCardModal,
    closePostCardModal,
    moreOptions,
    moreOptionsToggle,
    modifyModal,
    openModifyModal,
    closeModifyModal,
    removeConfirm,
    openRemoveConfirm,
    removeOk,
    removeCancel,
}: Props) => (
    <Wrapper mood={post.mood}>
        <PostHeaderContainer post={post} />
        <Body>
            <p>{post.content}</p>
            <ImageContainer
                className={post.images.length > 2 ? 'more' : post.images.length > 1 ? 'double' : ''}
                onClick={openPostCardModal}
            >
                {post.images[0] && (
                    <div>
                        {/* <Image width={640} height={640} src={post.image[0]} alt="postimage" /> */}
                        <img src={post.images[0]} alt="postimage" />
                    </div>
                )}
                {post.images[1] && (
                    <div>
                        {/* <Image width={640} height={640} src={post.image[0]} alt="postimage" /> */}
                        <img src={post.images[1]} alt="postimage" />
                    </div>
                )}
                {post.images[2] && (
                    <div>
                        {/* <Image width={640} height={640} src={post.image[0]} alt="postimage" /> */}
                        <img src={post.images[2]} alt="postimage" />
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
                <CommentFormContainer postId={post.id} />
            </div>
            <button type="button" onClick={moreOptionsToggle}>
                <IconMore />
            </button>
            {moreOptions && (
                <div className="more-options">
                    <div onClick={openModifyModal}>게시물 수정</div>
                    <div onClick={openRemoveConfirm}>게시물 삭제</div>
                </div>
            )}
            {removeConfirm && (
                <ConfirmModal
                    text="정말로 삭제하시겠습니까?"
                    onOk={() => {
                        removeOk(post.id);
                    }}
                    onCancel={removeCancel}
                />
            )}
        </Footer>
        {commentBox && comments && <CommentBoxContainer comments={comments} ht="128px" />}
        {modal && <PostCardModalContainer post={post} comments={comments} onClose={closePostCardModal} />}
        {modifyModal && <PostModifyModalContainer post={post} onClose={closeModifyModal} />}
    </Wrapper>
);
export default PostCardPresentert;
