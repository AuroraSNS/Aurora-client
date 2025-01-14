import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserPostsRequest, loadUserStatisticsRequest } from '../../redux/modules/post';

import { RootState } from '../../redux/modules/reducer';
import { loadProfileRequest, loadUserProfileRequest } from '../../redux/modules/user';
import { getToken } from '../../redux/sagas';
import UserPresenter from './UserPresenter';

const UserContainer = () => {
    const dispatch = useDispatch();
    const { me, user, modifyProfileDone } = useSelector((state: RootState) => state.user);
    const { filterList } = useSelector((state: RootState) => state.post);

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
        if (user) {
            dispatch(loadUserPostsRequest(user.id, 0, filterList));
        }
    }, [filterList]);

    useEffect(() => {
        if (addPostDone || removePostDone || modifyPostDone) {
            dispatch(loadUserPostsRequest(me.id, 0, filterList));
            dispatch(loadUserStatisticsRequest(String(me.id)));
            setPage(1);
        }
    }, [addPostDone, removePostDone, modifyPostDone, dispatch, page]);

    useEffect(() => {
        if (modifyProfileDone) {
            dispatch(loadProfileRequest(getToken() as string));
            dispatch(loadUserProfileRequest(me.id, getToken() as string));
            dispatch(loadUserPostsRequest(me.id, 0, filterList));
        }
    }, [modifyProfileDone]);

    useEffect(() => {
        function onScroll() {
            if (
                window.pageYOffset + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 300
            ) {
                if (loadUserPostsLoading || !hasMorePosts) return;
                dispatch(loadUserPostsRequest(user.id, page, filterList));
                setPage((prev) => prev + 1);
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
