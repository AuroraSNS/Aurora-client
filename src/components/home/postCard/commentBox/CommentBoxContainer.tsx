import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IComment } from '../../../../interfaces/comment';
import { loadCommentRequest } from '../../../../redux/modules/comment';
import { RootState } from '../../../../redux/modules/reducer';
import CommentBoxPresenter from './CommentBoxPresenter';

type Props = {
    postId: number;
    ht?: string;
    vertical?: boolean;
};

const CommentBoxContainer = ({ postId, ht, vertical }: Props) => {
    const dispatch = useDispatch();
    const { comment, loadCommentDone, addCommentDone, modifyCommentDone, removeCommentDone } = useSelector(
        (state: RootState) => state.comment,
    );
    const [comments, setComments] = useState<IComment[] | null>(null);

    useEffect(() => {
        if (comments === null) {
            dispatch(loadCommentRequest(postId));
        }
    }, []);

    useEffect(() => {
        if (loadCommentDone) {
            setComments(comment);
        }
    }, [loadCommentDone]);

    useEffect(() => {
        if (addCommentDone || modifyCommentDone || removeCommentDone) {
            dispatch(loadCommentRequest(postId));
        }
    }, [addCommentDone, modifyCommentDone, removeCommentDone]);

    return <CommentBoxPresenter postId={postId} comments={comments} ht={ht as string} vertical={vertical as boolean} />;
};

CommentBoxContainer.defaultProps = {
    ht: '100%',
    vertical: false,
};

export default CommentBoxContainer;
