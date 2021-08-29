import React, { FormEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../hooks/useInput';
import { addCommentRequest } from '../../../../redux/modules/comment';
import { RootState } from '../../../../redux/modules/reducer';
import CommentFormPresenter from './CommentFormPresenter';

type Props = {
    postId: number;
};

const CommentFormContainer = ({ postId }: Props) => {
    const dispatch = useDispatch();
    const { addCommentDone } = useSelector((state: RootState) => state.comment);
    const [content, onChangeContent, setContent] = useInput('');

    useEffect(() => {
        if (addCommentDone) {
            setContent('');
        }
    }, [addCommentDone]);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(addCommentRequest(postId, content));
        },
        [content],
    );
    return <CommentFormPresenter content={content} onChangeContent={onChangeContent} onSubmit={onSubmit} />;
};

export default CommentFormContainer;
