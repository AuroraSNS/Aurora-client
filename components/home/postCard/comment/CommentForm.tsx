import styled from 'styled-components';
import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { IconCheck } from '../../../Icon';

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

const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    input {
        flex: 1;
        background-color: #f0f2f5;
        border-radius: 10px;
        height: 25px;
        padding: 0 10px;
        width: 100%;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 28px;
        margin-left: 20px;
        background: linear-gradient(106.76deg, #d3bafc 3.84%, #b9d8f6 89.38%);
        border-radius: 50px;
    }
`;

export default CommentForm;
