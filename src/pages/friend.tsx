import { END } from 'redux-saga';
import nookies from 'nookies';
import React from 'react';
import wrapper from '../redux/create';

import FriendContainer from '../components/friend/FriendContainer';
import { loadProfileRequest } from '../redux/modules/user';
import { loadAllStatisticsRequest } from '../redux/modules/post';
import { loadFriendListRequest } from '../redux/modules/friend';
import { loadFriendNotificationRequest } from '../redux/modules/notification';

const friend = () => <FriendContainer />;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
        context.store.dispatch(loadFriendListRequest(cookies.accessToken));
        context.store.dispatch(loadFriendNotificationRequest(cookies.accessToken));
    }
    context.store.dispatch(loadAllStatisticsRequest());
    context.store.dispatch(END);
    await context.store.sagaTask?.toPromise();
});

export default friend;
