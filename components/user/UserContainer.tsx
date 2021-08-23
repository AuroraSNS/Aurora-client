import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserPostsRequest } from '../../actions/post';
import { RootState } from '../../reducers';
import UserPresenter from './UserPresenter';

const UserContainer = () => {
    const router = useRouter();
    const result = router.query;
    const dispatch = useDispatch();
    const {
        Posts,
        hasMorePosts,
        loadUserPostsLoading,
        loadUserPostsDone,
        addPostDone,
        removePostDone,
        modifyPostDone,
    } = useSelector((state: RootState) => state.post);
    const [page, setPage] = useState(Math.ceil(Posts.length / 10));
    useEffect(() => {
        if (addPostDone || removePostDone || modifyPostDone) {
            dispatch(loadUserPostsRequest(Number(result.id), 0));
            setPage(1);
        }
    }, [addPostDone, removePostDone, modifyPostDone, dispatch, page]);

    useEffect(() => {
        if (loadUserPostsDone) {
            setPage(Math.ceil(Posts.length / 10));
        }
    }, [loadUserPostsDone, Posts.length]);

    useEffect(() => {
        function onScroll() {
            if (
                window.pageYOffset + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 300
            ) {
                if (loadUserPostsLoading || !hasMorePosts) return;
                dispatch(loadUserPostsRequest(Number(result.id), page));
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [dispatch, loadUserPostsLoading, hasMorePosts, page]);

    return <UserPresenter Posts={Posts} />;
};

export default UserContainer;
