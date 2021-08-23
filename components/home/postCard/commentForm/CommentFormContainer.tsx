import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import CommentFormPresenter from './CommentFormPresenter';

type Props = {
    postId: number;
};

const CommentFormContainer = ({ postId }: Props) => {
    const dispatch = useDispatch();
    // const { addCommentDone, addCommentLoading } = useSelector((state: RootState) => state.post);

    const [comment, onChangeComment] = useInput('');
    return <CommentFormPresenter comment={comment} onChangeComment={onChangeComment} />;
};

export default CommentFormContainer;
