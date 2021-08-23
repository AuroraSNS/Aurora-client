import React from 'react';
import { IOnSubmit, ISetState } from '../../../../interfaces/data';
import { IconCheck } from '../../../common/Icon';
import { Form } from './style';

type Props = {
    content: string;
    onChangeContent: ISetState;
    onSubmit: IOnSubmit;
};

const CommentFormPresenter = ({ content, onChangeContent, onSubmit }: Props) => (
    <Form onSubmit={onSubmit}>
        <input type="text" placeholder="댓글을 입력하세요..." value={content} onChange={onChangeContent} />
        <button type="submit">
            <IconCheck />
        </button>
    </Form>
);

export default CommentFormPresenter;
