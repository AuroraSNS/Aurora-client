import { END } from 'redux-saga';
import nookies from 'nookies';
import React from 'react';
import UserContainer from '../../components/user/UserContainer';
import wrapper from '../../store/configureStore';
import { loadProfileRequest } from '../../actions/user';
import { loadUserPostsRequest } from '../../actions/post';

const User = () => <UserContainer />;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
    }
    if (context.params) {
        context.store.dispatch(loadUserPostsRequest(Number(context.params.id), 0));
    }
    context.store.dispatch(END);
    await context.store.sagaTask?.toPromise();
});

export default User;
