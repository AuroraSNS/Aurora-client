import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllPostsRequest } from '../../actions/post';
import { loadProfileRequest } from '../../actions/user';
import { RootState } from '../../reducers';
import { getToken } from '../../sagas';
import { getUrlParameter } from '../../util/util';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
    const dispatch = useDispatch();
    const { Posts, hasMorePosts, loadAllPostsLoading, loadAllPostsDone, addPostDone } = useSelector(
        (state: RootState) => state.post,
    );
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (sessionStorage.getItem('accessToken')) {
            const token = getToken();
            dispatch(loadProfileRequest(token));
        } else {
            const token = getUrlParameter('token');
            if (token) {
                sessionStorage.setItem('accessToken', token);
                dispatch(loadProfileRequest(token));
            }
        }
        dispatch(loadAllPostsRequest(page));
    }, []);

    useEffect(() => {
        if (addPostDone) {
            dispatch(loadAllPostsRequest(page));
            setPage(1);
        }
    }, [addPostDone, dispatch, page]);

    useEffect(() => {
        if (loadAllPostsDone) {
            setPage(Math.ceil(Posts.length / 10));
        }
    }, [loadAllPostsDone, Posts.length]);

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

    return <HomePresenter Posts={Posts} />;
};
export default HomeContainer;
