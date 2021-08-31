import React from 'react';
import { IPost } from '../../interfaces/post';
import ScrollToTop from '../common/ScrollToTop';
import PostCardContainer from '../home/postCard/PostCardContainer';
import { PostCardList } from '../home/style';
import AppLayout from '../layout/AppLayout';
import UserProfileContainer from './userProfile/UserProfileContainer';

type Props = {
    Posts: IPost[];
};

const UserPresenter = ({ Posts }: Props) => (
    <AppLayout filter isMain>
        <UserProfileContainer />
        <PostCardList>
            {Posts?.map((post: IPost) => (
                <PostCardContainer key={post.id} post={post} />
            ))}
            <ScrollToTop />
        </PostCardList>
    </AppLayout>
);

export default UserPresenter;
