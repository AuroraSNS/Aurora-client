import styled from 'styled-components';
import { IComment } from '../../../../interfaces/data/comment';

import Comment from './Comment';

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

const Wrapper = styled.section<{ ht: string }>`
    /* border: 1px solid gray; */
    margin-top: 25px;
    height: ${(props) => props.ht};
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
