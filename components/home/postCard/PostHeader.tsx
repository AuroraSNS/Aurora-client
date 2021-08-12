import React from 'react';
import styled from 'styled-components';
import { IPost } from '../../../interfaces/data/post';
import { IconCloud, IconMoon, IconRain, IconSun } from '../../Icon';

type Props = {
    post: IPost;
};

const PostHeader = ({ post }: Props) => (
    <Wrapper>
        <img src={post.auth.avator} alt="avator" />
        <div>
            <span>{post.auth.name}</span>
            <span>22 mins ago</span>
        </div>
        {post.mood === 'sun' && <IconSun />}
        {post.mood === 'cloud' && <IconCloud />}
        {post.mood === 'rain' && <IconRain />}
        {post.mood === 'moon' && <IconMoon />}
    </Wrapper>
);

const Wrapper = styled.section`
    /* border: 1px solid gray; */
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        margin-right: 12px;
    }
    div {
        display: flex;
        flex-direction: column;
        & > span:first-child {
            font-weight: 600;
            font-size: 14px;
        }
        & > span:last-child {
            font-size: 12px;
            color: #707070;
        }
    }
    svg {
        position: absolute;
        right: 0;
    }
`;

export default PostHeader;
