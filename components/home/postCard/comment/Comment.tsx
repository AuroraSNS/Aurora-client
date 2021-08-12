import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../../../hooks/useInput';
import { IComment } from '../../../../interfaces/data/comment';
import { RootState } from '../../../../reducers';
import { IconMore } from '../../../Icon';

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
                <span className="writer">{comment.auth.name}</span>
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

const Wrapper = styled.div<{ vertical: boolean }>`
    display: flex;
    flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
    margin: 5px 0;
    font-size: 12px;
    div {
        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
        }
        .writer {
            margin: 0 8px;
            font-weight: 600;
        }
        display: flex;
        align-items: center;
    }
`;

export default Comment;
