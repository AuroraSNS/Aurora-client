import React from 'react';
import { IComment } from '../../../../../interfaces/data/comment';
import { Wrapper } from './style';

type Props = {
    vertical: boolean;
    comment: IComment;
};

const CommentPresenter = ({ vertical, comment }: Props) => (
    <Wrapper vertical={vertical as boolean}>
        <div>
            <img src={comment.auth.avator} alt="avatar" />
            <span>{comment.auth.name}</span>
        </div>
        <div>
            <p>{comment.content}</p>
            {/* <IconMore /> */}
        </div>
    </Wrapper>
);

export default CommentPresenter;
