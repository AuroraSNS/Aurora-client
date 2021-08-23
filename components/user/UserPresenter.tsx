import React from 'react';
import { IPost } from '../../interfaces/data/post';
import { IconLeft } from '../common/Icon';
import PostCardContainer from '../home/postCard/PostCardContainer';
import { PostCardList } from '../home/style';
import AppLayout from '../layout/AppLayout';

type Props = {
    Posts: IPost[];
};

const UserPresenter = ({ Posts }: Props) => (
    <AppLayout title="Home" filter isMain>
        <PostCardList>
            {Posts?.map((post: IPost) => (
                <PostCardContainer key={post.id} post={post} />
            ))}
            <div id="to-top">
                <IconLeft />
            </div>
        </PostCardList>
    </AppLayout>
);

export default UserPresenter;
