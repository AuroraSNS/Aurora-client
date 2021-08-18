import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { IComment } from '../../../../interfaces/data/comment';
import { RootState } from '../../../../reducers';
import { Wrapper } from './style';

type Props = {
    comment: IComment;
    vertical?: boolean;
};

const Comment = ({ comment, vertical }: Props) => {
    const { me } = useSelector((state: RootState) => state.user);
    const [editMode, setEditMode] = useState(false);
    const [editText, changeEditText] = useInput(comment.content);
    return (
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
};

Comment.defaultProps = {
    vertical: false,
};

export default Comment;
