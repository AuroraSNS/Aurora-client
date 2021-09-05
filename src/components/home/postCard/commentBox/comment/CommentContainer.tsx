import React, { FormEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../../../hooks/useInput';
import useToggle from '../../../../../hooks/useToggle';
import { IComment } from '../../../../../interfaces/comment';
import { modifyCommentRequest, removeCommentRequest } from '../../../../../redux/modules/comment';
import { RootState } from '../../../../../redux/modules/reducer';
import CommentPresenter from './CommentPresenter';

type Props = {
    postId: number;
    comment: IComment;
    vertical?: boolean;
};

const CommentContainer = ({ postId, comment, vertical }: Props) => {
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);
    const { modifyCommentDone } = useSelector((state: RootState) => state.comment);
    const [showMoreOptions, showMoreOptionsToggle] = useToggle(false);
    const [showRemoveModal, showRemoveModalToggle] = useToggle(false);
    const [showEditMode, showEditModeToggle, setShowEditMode] = useToggle(false);
    const [editText, changeEditText, setEditText] = useInput(comment.content);

    useEffect(() => {
        if (showEditMode) {
            showMoreOptionsToggle();
        } else {
            setEditText('');
        }
    }, [showEditMode]);

    useEffect(() => {
        if (modifyCommentDone) {
            setShowEditMode(false);
        }
    }, [modifyCommentDone]);

    const removeOk = useCallback(
        (id: number) => {
            dispatch(removeCommentRequest(id, postId));
            showRemoveModalToggle();
            showMoreOptionsToggle();
        },
        [dispatch],
    );

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(modifyCommentRequest(comment.id, editText));
        },
        [editText],
    );

    return (
        <CommentPresenter
            isMe={me?.id === comment.auth.id}
            vertical={vertical as boolean}
            comment={comment}
            showMoreOptions={showMoreOptions}
            showMoreOptionsToggle={showMoreOptionsToggle}
            showRemoveModal={showRemoveModal}
            showRemoveModalToggle={showRemoveModalToggle}
            showEditMode={showEditMode}
            showEditModeToggle={showEditModeToggle}
            editText={editText}
            changeEditText={changeEditText}
            removeOk={removeOk}
            onSubmit={onSubmit}
        />
    );
};

CommentContainer.defaultProps = {
    vertical: false,
};

export default CommentContainer;
