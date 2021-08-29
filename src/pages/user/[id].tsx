import { END } from 'redux-saga';
import nookies from 'nookies';
import React from 'react';
import UserContainer from '../../components/user/UserContainer';
import wrapper from '../../redux/create';
import { loadProfileRequest, loadUserProfileRequest } from '../../actions/user';
import { loadUserPostsRequest, loadUserStatisticsRequest } from '../../actions/post';

const User = () => <UserContainer />;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
    }
    if (context.params) {
        context.store.dispatch(loadUserStatisticsRequest(context.params.id as string));
        context.store.dispatch(loadUserProfileRequest(Number(context.params.id)));
        context.store.dispatch(loadUserPostsRequest(Number(context.params.id), 0, []));
    }
    context.store.dispatch(END);
    await context.store.sagaTask?.toPromise();
});

export default User;
