import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

const Profile = () => {
    const router = useRouter();

    // const dispatch = useDispatch();
    const { isLoggedIn, accessToken } = useSelector((state: RootState) => state.user);
    // const { Posts, firstLoadPostDone, filterWeather, totalPosts } = useSelector((state) => state.post);

    // const [page, setPage] = useState(2);

    // let filterPosts = [];
    // if (filterWeather.length > 0) {
    //     filterPosts = Posts.filter((ele) => filterWeather.includes(ele.mood));
    // }

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         dispatch(firstLoadPost(accessToken));
    //     } else {
    //         router.push('/user/signin');
    //     }
    // }, [isLoggedIn]);

    // useEffect(() => {
    //     dispatch(loadStatistics(accessToken));
    // }, []);

    // const onClickMore = useCallback(() => {
    //     dispatch(moreLoadPost(page, accessToken));
    //     setPage((prev) => prev + 1);
    // }, [page]);

    return (
        <>
            {isLoggedIn && (
                <>
                    <Head>
                        <title>프로필 | Aurora</title>
                    </Head>
                    {/* <AppLayout filter isMain={false}>
                        <UserProfile />
                        <Text>나의 포스트</Text>
                        {totalPosts !== 0 ? (
                            <PostCardList>
                                {firstLoadPostDone ? (
                                    filterWeather.length > 0 ? (
                                        filterPosts.map((post) => <PostCard key={post._id} post={post} />)
                                    ) : (
                                        Posts.map((post) => <PostCard key={post._id} post={post} />)
                                    )
                                ) : (
                                    <Wrapper>
                                        <Loading />
                                    </Wrapper>
                                )}
                                {totalPosts > Posts.length && (
                                    <LoadMoreBtn onClick={onClickMore}>더 많은 게시물 보기</LoadMoreBtn>
                                )}
                            </PostCardList>
                        ) : (
                            <div>첫 게시물을 작성해보세요!</div>
                        )}
                    </AppLayout> */}
                </>
            )}
        </>
    );
};

const PostCardList = styled.div`
    width: 100%;
    height: 45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.625rem;
    overflow: auto;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Text = styled.div`
    margin: 1rem 0;
    padding: 1rem;
    width: 80%;
    border-bottom: 1px solid #ddd;
    font-size: 1.5rem;
    font-weight: 600;
    color: #424242;
`;
const Wrapper = styled.div`
    margin-top: -50%;
`;
const LoadMoreBtn = styled.button`
    border: none;
    background: none;
    margin: 1rem 0;
    font-size: 1rem;
    color: #424242;
    cursor: pointer;
    &:hover {
        color: #a18afc;
        font-size: 1.1rem;
    }
    &:focus {
        outline: none;
    }
`;
export default Profile;
