import React from 'react';
import { ISetState } from '../../../../interfaces/data';
import { IconCheck } from '../../../common/Icon';
import { Form } from './style';

type Props = {
    comment: string;
    onChangeComment: ISetState;
};

const CommentFormPresenter = ({ comment, onChangeComment }: Props) => (
    <Form>
        <input type="text" placeholder="댓글을 입력하세요..." value={comment} onChange={onChangeComment} />
        <button type="submit">
            <IconCheck />
        </button>
    </Form>
);

export default CommentFormPresenter;
