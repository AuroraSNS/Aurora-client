import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { IconCheck } from '../../../common/Icon';
import { Form } from './style';

type Props = {
    postId: string;
};

const CommentForm = ({ postId }: Props) => {
    const dispatch = useDispatch();
    // const { addCommentDone, addCommentLoading } = useSelector((state: RootState) => state.post);

    const [comment, onChangeComment] = useInput('');

    return (
        <Form>
            <input type="text" placeholder="댓글을 입력하세요..." value={comment} onChange={onChangeComment} />
            <button type="submit">
                <IconCheck />
            </button>
        </Form>
    );
};

export default CommentForm;
