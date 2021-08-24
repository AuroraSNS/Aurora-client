import React from 'react';
import { IPost } from '../../interfaces/data/post';
import { IUserProfile } from '../../interfaces/data/user';
import { IconLeft } from '../common/Icon';
import PostCardContainer from '../home/postCard/PostCardContainer';
import { PostCardList } from '../home/style';
import AppLayout from '../layout/AppLayout';
import UserProfileContainer from './userProfile/UserProfileContainer';

type Props = {
    Posts: IPost[];
    user: IUserProfile;
};

const UserPresenter = ({ Posts, user }: Props) => (
    <AppLayout title="Home" filter isMain>
        <UserProfileContainer user={user} />
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
