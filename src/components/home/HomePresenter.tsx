import React from 'react';
import { IPost } from '../../interfaces/data/post';
import ScrollToTop from '../common/ScrollToTop';
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
            <ScrollToTop />
        </PostCardList>
    </AppLayout>
);

export default HomePresenter;
