import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { END } from 'redux-saga';
import AppLayout from '../components/layout/AppLayout';

import PostRegisterBar from '../components/home/postRegister/postRegisterBar';
import { loadAllPostsRequest } from '../actions/post';
import { RootState } from '../reducers';
import PostCard from '../components/home/postCardList/postCard';
import { loadProfileRequest } from '../actions/user';
import wrapper from '../store/configureStore';
import { IPost } from '../interfaces/data/post';

const Home = () => {
    // const router = useRouter();

    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);
    const { Posts, hasMorePosts, loadAllPostsLoading, loadAllPostsDone } = useSelector(
        (state: RootState) => state.post,
    );
    const [page, setPage] = useState(0);

    // let filterPosts = [];
    // if (filterWeather.length > 0) {
    //     filterPosts = Posts.filter((ele) => filterWeather.includes(ele.mood));
    // }

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         dispatch(firstLoadAllPost(Time, accessToken));
    //         dispatch(loadLikePost(accessToken));
    //     } else {
    //         router.push('/user/signin');
    //     }
    // }, [isLoggedIn]);

    useEffect(() => {
        if (loadAllPostsDone) {
            setPage(Math.ceil(Posts.length / 10));
        }
    }, [loadAllPostsDone, Posts.length]);

    useEffect(() => {
        // dispatch(loadProfileRequest('token'));
        dispatch(loadAllPostsRequest(page));
    }, [dispatch, page]);

    useEffect(() => {
        function onScroll() {
            if (
                window.pageYOffset + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 300
            ) {
                if (loadAllPostsLoading || !hasMorePosts) return;
                dispatch(loadAllPostsRequest(page));
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [dispatch, loadAllPostsLoading, hasMorePosts, page]);

    return (
        <AppLayout title="Home" filter isMain>
            <PostRegisterBar />
            <PostCardList>
                {Posts?.map((post: IPost) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </PostCardList>
        </AppLayout>
    );
};

// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//     context.store.dispatch(loadProfileRequest('ddd'));
//     context.store.dispatch(loadFirstPostsRequest());
//     context.store.dispatch(END);
//     await context.store.sagaTask?.toPromise();
// });

const PostCardList = styled.section`
    /* border: 1px solid gray; */
    width: 100%;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
    margin-top: 25px;
    overflow: visible;
    @media screen and (max-width: 768px) {
        margin-top: 100px;
    }
`;

export default Home;
