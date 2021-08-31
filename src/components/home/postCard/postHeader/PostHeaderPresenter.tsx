import Link from 'next/link';
import React from 'react';
import { IPost } from '../../../../interfaces/post';
import Avatar from '../../../common/Avatar';
import { IconCloud, IconMoon, IconRain, IconSun } from '../../../common/Icon';
import { IconMood, Wrapper } from './style';

type Props = {
    post: IPost;
};

const PostHeaderPresenter = ({ post }: Props) => (
    <Wrapper>
        <Link href={`/user/${post.auth.id}`}>
            <a>
                <Avatar size={44} url={post.auth.avatar} />
            </a>
        </Link>
        <div className="info">
            <Link href={`/user/${post.auth.id}`}>
                <a>{post.auth.name}</a>
            </Link>
            <span>22 mins ago</span>
        </div>
        <IconMood mood={post.mood} />
    </Wrapper>
);

export default PostHeaderPresenter;
