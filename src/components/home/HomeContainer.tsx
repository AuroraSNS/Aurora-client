import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllPostsRequest, loadAllStatisticsRequest } from '../../actions/post';
import { RootState } from '../../reducers';
import { getUrlParameter } from '../../util/util';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const {
        Posts,
        hasMorePosts,
        loadAllPostsLoading,
        loadAllPostsDone,
        addPostDone,
        removePostDone,
        modifyPostDone,
        filterList,
    } = useSelector((state: RootState) => state.post);
    const [page, setPage] = useState(Math.ceil(Posts.length / 10));

    useEffect(() => {
        dispatch(loadAllPostsRequest(0, filterList));
    }, [filterList]);

    useEffect(() => {
        const token = getUrlParameter('token');
        if (token) {
            destroyCookie(null, 'accessToken');
            setCookie(null, 'accessToken', token, { path: '/' });
            window?.sessionStorage.removeItem('accessToken');
            window?.sessionStorage.setItem('accessToken', token);
            router.push('/');
        }
    }, []);

    // 게시물 리로딩
    useEffect(() => {
        if (addPostDone || removePostDone || modifyPostDone) {
            dispatch(loadAllPostsRequest(0, filterList));
            dispatch(loadAllStatisticsRequest());
            setPage(1);
        }
    }, [addPostDone, removePostDone, modifyPostDone, dispatch, page]);

    // 게시물 더 불러오기
    useEffect(() => {
        if (loadAllPostsDone) {
            setPage(Math.ceil(Posts.length / 10));
        }
    }, [loadAllPostsDone, Posts.length]);

    // 무한스크롤
    useEffect(() => {
        function onScroll() {
            if (
                window.pageYOffset + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 300
            ) {
                if (loadAllPostsLoading || !hasMorePosts) return;
                dispatch(loadAllPostsRequest(page, filterList));
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [dispatch, loadAllPostsLoading, hasMorePosts, page]);

    return <HomePresenter Posts={Posts} />;
};
export default HomeContainer;
