import React from 'react';
import { IComment } from '../../../../interfaces/data/comment';
import Comment from '../comment';
import { Wrapper } from './style';

type Props = {
    comments: IComment[];
    ht?: string;
    vertical?: boolean;
};

const CommentBox = ({ comments, ht, vertical }: Props) => (
    <Wrapper ht={ht as string}>
        {comments &&
            comments.map((comment) => <Comment key={comment.id} comment={comment} vertical={vertical as boolean} />)}
    </Wrapper>
);

CommentBox.defaultProps = {
    ht: '100%',
    vertical: false,
};

export default CommentBox;
