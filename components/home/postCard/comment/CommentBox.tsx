import styled from 'styled-components';
import { IComment } from '../../../../interfaces/data/comment';

import Comment from './Comment';

type Props = {
    comments: IComment[];
};

const CommentBox = ({ comments }: Props) => (
    <Wrapper>{comments && comments.map((comment) => <Comment key={comment.id} comment={comment} />)}</Wrapper>
);

const Wrapper = styled.section`
    /* border: 1px solid gray; */
    margin-top: 25px;
    height: 118px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 6px; /*스크롤바의 너비*/
    }

    &::-webkit-scrollbar-thumb {
        /* 스크롤바 */
        background-color: #f0f2f5;
        /* background-clip: padding-box;
        border: 1px solid transparent; */
        border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
        /* 스크롤바 바탕 */
        background-color: transparent;
    }
`;

export default CommentBox;
