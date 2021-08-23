import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useInput from '../../../../../hooks/useInput';
import { IComment } from '../../../../../interfaces/data/comment';
import { RootState } from '../../../../../reducers';
import CommentPresenter from './CommentPresenter';

type Props = {
    comment: IComment;
    vertical?: boolean;
};

const CommentContainer = ({ comment, vertical }: Props) => {
    const { me } = useSelector((state: RootState) => state.user);
    const [editMode, setEditMode] = useState(false);
    const [editText, changeEditText] = useInput(comment.content);
    return <CommentPresenter vertical={vertical as boolean} comment={comment} />;
};

CommentContainer.defaultProps = {
    vertical: false,
};

export default CommentContainer;
