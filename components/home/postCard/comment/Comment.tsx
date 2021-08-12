import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../../../hooks/useInput';
import { IComment } from '../../../../interfaces/data/comment';
import { RootState } from '../../../../reducers';
import { IconMore } from '../../../Icon';

type Props = {
    comment: IComment;
};

const Comment = ({ comment }: Props) => {
    const { me } = useSelector((state: RootState) => state.user);
    const [editMode, setEditMode] = useState(false);
    const [editText, changeEditText] = useInput(comment.content);
    return (
        <Wrapper>
            <img src={comment.auth.avator} alt="avatar" />
            <span className="writer">{comment.auth.name}</span>
            <span>{comment.content}</span>
            <div>
                <IconMore />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 3px 0;
    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
    .writer {
        margin: 0 8px;
        font-weight: 600;
    }
    div {
        width: 22px;
        margin-left: 5px;
        cursor: pointer;
    }
`;

export default Comment;
