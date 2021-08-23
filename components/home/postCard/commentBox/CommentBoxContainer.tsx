import React from 'react';
import { IComment } from '../../../../interfaces/data/comment';
import CommentBoxPresenter from './CommentBoxPresenter';

type Props = {
    comments: IComment[];
    ht?: string;
    vertical?: boolean;
};

const CommentBoxContainer = ({ comments, ht, vertical }: Props) => (
    <CommentBoxPresenter comments={comments} ht={ht as string} vertical={vertical as boolean} />
);

CommentBoxContainer.defaultProps = {
    ht: '100%',
    vertical: false,
};

export default CommentBoxContainer;
