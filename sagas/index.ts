import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
import postSaga from './post';
import commentSaga from './comment';

axios.defaults.baseURL = 'https://api.aurora.center/';
axios.defaults.withCredentials = true;

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')) as string;
    }
};

export default function* rootSaga() {
    yield all([fork(userSaga), fork(postSaga), fork(commentSaga)]);
}
