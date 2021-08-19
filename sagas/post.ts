/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from 'axios';
import { setCookie } from 'nookies';
import { all, fork, put, takeLatest, throttle, call, delay } from 'redux-saga/effects';
import {
    loadAllPostsFailure,
    addPostFailure,
    addPostRequest,
    addPostSuccess,
    ADD_POST_REQUEST,
    loadAllPostsRequest,
    loadAllPostsSuccess,
    loadUserPostsSuccess,
    loadUserPostsFailure,
    LOAD_ALL_POSTS_REQUEST,
    LOAD_USER_POSTS_REQUEST,
    loadUserPostsRequest,
} from '../actions/post';
import { IPost } from '../interfaces/data/post';
import { createSamplePosts } from '../util/sample';

function loadAllPostsAPI(page: number) {
    return axios({
        method: 'GET',
        url: '/posts/all',
        params: {
            page,
        },
    });
}

function* loadAllPosts(action: ReturnType<typeof loadAllPostsRequest>) {
    try {
        const result: AxiosResponse<IPost[] | []> = yield call(loadAllPostsAPI, action.page);
        yield put(loadAllPostsSuccess(result.data, action.page));
    } catch (err) {
        yield put(loadAllPostsFailure(err.message));
    }
}

function loadUserPostsAPI(userId: number, page: number) {
    return axios({
        method: 'GET',
        url: `/posts/all/${userId}`,
        params: {
            page,
        },
    });
}

function* loadUserPosts(action: ReturnType<typeof loadUserPostsRequest>) {
    try {
        const result: AxiosResponse<IPost[] | []> = yield call(loadUserPostsAPI, action.userId, action.page);
        console.log('res : ', result.data);
        yield delay(1000);
        yield put(loadUserPostsSuccess(createSamplePosts(5), action.page));
    } catch (err) {
        yield put(loadUserPostsFailure(err.message));
    }
}

// function addPostAPI(serviceId: string) {
//     return axios({
//         method: 'GET',
//         url: `api/v1/services/${serviceId}`,
//     });
// }

function* addPost(action: ReturnType<typeof addPostRequest>) {
    try {
        // const result: AxiosResponse<{ service: Service }> = yield call(addPostAPI, action.serviceId);
        yield delay(1000);
        yield put(addPostSuccess());
    } catch (err) {
        yield put(addPostFailure(err.message));
    }
}

function* watchLoadAllPosts() {
    yield throttle(5000, LOAD_ALL_POSTS_REQUEST, loadAllPosts);
}

function* watchLoadUserPosts() {
    yield throttle(5000, LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga() {
    yield all([fork(watchLoadAllPosts), fork(watchLoadUserPosts), fork(watchAddPost)]);
}
