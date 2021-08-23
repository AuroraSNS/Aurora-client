/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IOnSubmit, ISetState } from '../../../../../interfaces/data';
import { IComment } from '../../../../../interfaces/data/comment';
import Avatar from '../../../../common/Avatar';
import ConfirmModal from '../../../../common/ConfirmModal';
import { IconMore } from '../../../../common/Icon';
import { EditForm, Wrapper } from './style';

type Props = {
    isMe: boolean;
    vertical: boolean;
    comment: IComment;
    showMoreOptions: boolean;
    showMoreOptionsToggle: () => void;
    showRemoveModal: boolean;
    showRemoveModalToggle: () => void;
    showEditMode: boolean;
    showEditModeToggle: () => void;
    editText: string;
    changeEditText: ISetState;
    removeOk: (id: number) => void;
    onSubmit: IOnSubmit;
};

const CommentPresenter = ({
    isMe,
    vertical,
    comment,
    showMoreOptions,
    showMoreOptionsToggle,
    showRemoveModal,
    showRemoveModalToggle,
    showEditMode,
    showEditModeToggle,
    editText,
    changeEditText,
    removeOk,
    onSubmit,
}: Props) => (
    <Wrapper vertical={vertical as boolean}>
        <div>
            <Avatar url={comment.auth.avator} size={36} />
            <span>{comment.auth.name}</span>
        </div>
        <div>
            {showEditMode ? (
                <EditForm onSubmit={onSubmit}>
                    <input
                        type="text"
                        value={editText}
                        onChange={changeEditText}
                        placeholder={comment.content}
                        autoFocus
                    />
                    <button type="submit">완료</button>
                    <button type="button" onClick={showEditModeToggle}>
                        취소
                    </button>
                </EditForm>
            ) : (
                <p>{comment.content}</p>
            )}
            {isMe && showMoreOptions && (
                <>
                    <div className="overlay" onClick={showMoreOptionsToggle} />
                    <div className="more-options">
                        <span onClick={showEditModeToggle}>수정</span> |
                        <span onClick={showRemoveModalToggle}>삭제</span>
                    </div>
                </>
            )}
            {isMe && !showMoreOptions && !showEditMode && (
                <button type="button" onClick={showMoreOptionsToggle}>
                    <IconMore />
                </button>
            )}
            {showRemoveModal && (
                <ConfirmModal
                    text="정말로 삭제하시겠습니까?"
                    onOk={() => {
                        removeOk(comment.id);
                    }}
                    onCancel={showRemoveModalToggle}
                />
            )}
        </div>
    </Wrapper>
);

export default CommentPresenter;
