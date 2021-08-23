import React from 'react';
import { IPost } from '../../interfaces/data/post';
import { IconLeft } from '../common/Icon';
import AppLayout from '../layout/AppLayout';
import PostCardContainer from './postCard/PostCardContainer';
import PostRegisterBarContainer from './postRegisterBar/PostRegisterBarContainer';
import { PostCardList } from './style';

type Props = {
    Posts: IPost[];
};

const HomePresenter = ({ Posts }: Props) => (
    <AppLayout title="Home" filter isMain>
        <PostRegisterBarContainer />
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

export default HomePresenter;
