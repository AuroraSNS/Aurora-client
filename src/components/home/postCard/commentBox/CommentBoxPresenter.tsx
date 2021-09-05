import React from 'react';
import { IComment } from '../../../../interfaces/comment';
import CommentContainer from './comment/CommentContainer';
import { Wrapper } from './style';

type Props = {
    postId: number;
    comments: IComment[] | null;
    ht: string;
    vertical: boolean;
};

const CommentBoxPresenter = ({ ht, vertical, comments, postId }: Props) => (
    <Wrapper ht={ht as string}>
        {comments &&
            comments.map((comment) => (
                <CommentContainer key={comment.id} postId={postId} comment={comment} vertical={vertical as boolean} />
            ))}
    </Wrapper>
);

export default CommentBoxPresenter;
