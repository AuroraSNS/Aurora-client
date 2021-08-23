/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from 'axios';
import { all, fork, put, takeLatest, throttle, call, delay } from 'redux-saga/effects';
import { getToken } from '.';
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
    REMOVE_POST_REQUEST,
    removePostRequest,
    removePostSuccess,
    removePostFailure,
    MODIFY_POST_REQUEST,
    modifyPostSuccess,
    modifyPostFailure,
    modifyPostRequest,
} from '../actions/post';
import { IPost } from '../interfaces/data/post';

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
        yield put(loadUserPostsSuccess(result.data, action.page));
        // yield put(loadUserPostsSuccess(createSamplePosts(5), action.page));
    } catch (err) {
        yield put(loadUserPostsFailure(err.message));
    }
}

function addPostAPI(data: FormData) {
    return axios({
        method: 'POST',
        url: `/posts`,
        headers: { Authorization: `Bearer ${getToken()}` },
        data,
    });
}

function* addPost(action: ReturnType<typeof addPostRequest>) {
    try {
        yield call(addPostAPI, action.data);
        yield put(addPostSuccess());
    } catch (err) {
        yield put(addPostFailure(err.message));
    }
}

function modifyPostAPI(data: FormData) {
    return axios({
        method: 'PATCH',
        url: `/posts`,
        headers: { Authorization: `Bearer ${getToken()}` },
        data,
    });
}

function* modifyPost(action: ReturnType<typeof modifyPostRequest>) {
    try {
        yield call(modifyPostAPI, action.data);
        yield put(modifyPostSuccess());
    } catch (err) {
        yield put(modifyPostFailure(err.message));
    }
}

function removePostAPI(postId: number) {
    return axios({
        method: 'DELETE',
        url: `/posts/${postId}`,
        headers: { Authorization: `Bearer ${getToken()}` },
    });
}

function* removePost(action: ReturnType<typeof removePostRequest>) {
    try {
        yield call(removePostAPI, action.postId);
        yield put(removePostSuccess());
    } catch (err) {
        yield put(removePostFailure(err.message));
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

function* watchModifyPost() {
    yield takeLatest(MODIFY_POST_REQUEST, modifyPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadAllPosts),
        fork(watchLoadUserPosts),
        fork(watchAddPost),
        fork(watchModifyPost),
        fork(watchRemovePost),
    ]);
}
