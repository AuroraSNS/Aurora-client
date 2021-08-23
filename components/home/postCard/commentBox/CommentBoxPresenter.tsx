import React from 'react';
import { IComment } from '../../../../interfaces/data/comment';
import CommentContainer from './comment/CommentContainer';
import { Wrapper } from './style';

type Props = {
    comments: IComment[];
    ht: string;
    vertical: boolean;
};

const CommentBoxPresenter = ({ ht, vertical, comments }: Props) => (
    <Wrapper ht={ht as string}>
        {comments &&
            comments.map((comment) => (
                <CommentContainer key={comment.id} comment={comment} vertical={vertical as boolean} />
            ))}
    </Wrapper>
);

export default CommentBoxPresenter;
