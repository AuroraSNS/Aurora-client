/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from 'axios';
import { setCookie } from 'nookies';
import { all, fork, put, takeLatest, throttle, call, delay } from 'redux-saga/effects';
import {
    loadFirstPostsFailure,
    loadFirstPostsRequest,
    loadFirstPostsSuccess,
    loadMorePostsFailure,
    loadMorePostsRequest,
    loadMorePostsSuccess,
    LOAD_FIRST_POSTS_REQUEST,
    LOAD_MORE_POSTS_REQUEST,
} from '../actions/post';
import { createSamplePosts } from '../util/sample';

// function loadFirstPostsAPI() {
//     return axios({
//         method: 'POST',
//         url: '/api/v1/services',
//         data,
//         headers: { accessToken },
//     });
// }

function* loadFirstPosts(action: ReturnType<typeof loadFirstPostsRequest>) {
    try {
        // const result: AxiosResponse<{ service: Service }> = yield call(addServiceAPI, action.data, accessToken);
        yield delay(1000);
        yield put(loadFirstPostsSuccess(createSamplePosts(5)));
    } catch (err) {
        yield put(loadFirstPostsFailure(err.message));
    }
}

// function loadMorePostsAPI(serviceId: string) {
//     return axios({
//         method: 'GET',
//         url: `api/v1/services/${serviceId}`,
//     });
// }

function* loadMorePosts(action: ReturnType<typeof loadMorePostsRequest>) {
    try {
        // const result: AxiosResponse<{ service: Service }> = yield call(loadServiceAPI, action.serviceId);
        yield delay(1000);
        yield put(loadMorePostsSuccess(createSamplePosts(5)));
    } catch (err) {
        yield put(loadMorePostsFailure(err.message));
    }
}

function* watchLoadFirstPosts() {
    yield takeLatest(LOAD_FIRST_POSTS_REQUEST, loadFirstPosts);
}

function* watchLoadMorePosts() {
    yield throttle(5000, LOAD_MORE_POSTS_REQUEST, loadMorePosts);
}

export default function* postSaga() {
    yield all([fork(watchLoadFirstPosts), fork(watchLoadMorePosts)]);
}
