/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { getToken } from '.';
import {
    loadCommentRequest,
    loadCommentSuccess,
    loadCommentFailure,
    LOAD_COMMENT_REQUEST,
    ADD_COMMENT_REQUEST,
    MODIFY_COMMENT_REQUEST,
    REMOVE_COMMENT_REQUEST,
    addCommentFailure,
    addCommentRequest,
    addCommentSuccess,
    removeCommentRequest,
    removeCommentSuccess,
    removeCommentFailure,
    modifyCommentSuccess,
    modifyCommentFailure,
    modifyCommentRequest,
} from '../actions/comment';
import { IComment } from '../interfaces/data/comment';

function loadCommentAPI(postId: number) {
    return axios({
        method: 'GET',
        url: `/comments/${postId}`,
    });
}

function* loadComment(action: ReturnType<typeof loadCommentRequest>) {
    try {
        const result: AxiosResponse<{ comments: IComment[]; commentCnt: number }> = yield call(
            loadCommentAPI,
            action.postId,
        );
        yield put(loadCommentSuccess(result.data));
    } catch (err) {
        yield put(loadCommentFailure(err.message));
    }
}

function addCommentAPI(postId: number, content: string) {
    return axios({
        method: 'POST',
        url: `/comments/${postId}`,
        headers: { Authorization: `Bearer ${getToken()}` },
        data: {
            content,
        },
    });
}

function* addComment(action: ReturnType<typeof addCommentRequest>) {
    try {
        yield call(addCommentAPI, action.postId, action.content);
        yield put(addCommentSuccess());
    } catch (err) {
        yield put(addCommentFailure(err.message));
    }
}

function modifyCommentAPI(commentId: number, content: string) {
    return axios({
        method: 'PATCH',
        url: `/comments/${commentId}`,
        headers: { Authorization: `Bearer ${getToken()}` },
        data: {
            content,
        },
    });
}

function* modifyComment(action: ReturnType<typeof modifyCommentRequest>) {
    try {
        yield call(modifyCommentAPI, action.commentId, action.content);
        yield put(modifyCommentSuccess());
    } catch (err) {
        yield put(modifyCommentFailure(err.message));
    }
}

function removeCommentAPI(commentId: number) {
    return axios({
        method: 'DELETE',
        url: `/comments/${commentId}`,
        headers: { Authorization: `Bearer ${getToken()}` },
    });
}

function* removeComment(action: ReturnType<typeof removeCommentRequest>) {
    try {
        yield call(removeCommentAPI, action.commentId);
        yield put(removeCommentSuccess());
    } catch (err) {
        yield put(removeCommentFailure(err.message));
    }
}

function* watchLoadComment() {
    yield takeLatest(LOAD_COMMENT_REQUEST, loadComment);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchModifyComment() {
    yield takeLatest(MODIFY_COMMENT_REQUEST, modifyComment);
}

function* watchRemoveComment() {
    yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
}

export default function* commentSaga() {
    yield all([fork(watchLoadComment), fork(watchAddComment), fork(watchModifyComment), fork(watchRemoveComment)]);
}
