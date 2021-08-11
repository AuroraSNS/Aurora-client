import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import AppLayout from '../components/layout/AppLayout';
import Loading from '../components/Loading';

import PostRegisterBar from '../components/home/postRegister/PostRegisterBar';
import { firstLoadAllPost, moreLoadAllPost, CHANGE_TIME, loadAllStatistics, loadLikePost } from '../actions/post';
import PostRegisterModal from '../components/home/postRegister/PostRegisterModal';
import { RootState } from '../reducers';
import PostCard from '../components/home/postCard/PostCardt';
import { createSamplePosts } from '../util/sample';

const Home = () => {
    // const router = useRouter();

    // const dispatch = useDispatch();
    // const { Time, Posts, firstLoadAllPostDone, filterWeather, totalPosts } = useSelector((state) => state.post);
    // const { isLoggedIn, accessToken } = useSelector((state) => state.user);
    const { isPostRegisterModalVisible } = useSelector((state: RootState) => state.modal);
    // const [page, setPage] = useState(2);

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

    // useEffect(() => {
    //     dispatch(loadAllStatistics());
    //     dispatch({
    //         type: CHANGE_TIME,
    //         payload: new Date().toISOString(),
    //     });
    // }, []);

    // const onClickMore = useCallback(() => {
    //     dispatch(moreLoadAllPost(page, Time, accessToken));
    //     setPage((prev) => prev + 1);
    // }, [page]);
    const [samplePosts, setSamplePosts] = useState(null);
    useEffect(() => {
        const tmp = createSamplePosts(3);
        setSamplePosts(tmp);
    }, []);
    return (
        <AppLayout title="Home" filter isMain>
            <PostRegisterBar />

            <PostCardList>
                {samplePosts?.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
                {/* <PostCard />
                <PostCard /> */}
                {/* {firstLoadAllPostDone ? (
                    filterWeather.length > 0 ? (
                        filterPosts.map((post) => <PostCard key={post._id} post={post} />)
                    ) : (
                        Posts.map((post) => <PostCard key={post._id} post={post} />)
                    )
                ) : (
                    <Loading />
                )}
                {totalPosts > Posts.length && <LoadMoreBtn onClick={onClickMore}>더 많은 게시물 보기</LoadMoreBtn>} */}
            </PostCardList>
            {isPostRegisterModalVisible && <PostRegisterModal />}
        </AppLayout>
    );
};

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
