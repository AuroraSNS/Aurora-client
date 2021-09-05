import axios, { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getToken } from '.';
import { IAuth } from '../../interfaces/user';
import {
    addFriendRequest,
    addRecommendFriendRequest,
    addRecommendFriendSuccess,
    ADD_FRIEND_REQUEST,
    ADD_RECOMMEND_FRIEND_REQUEST,
    loadFriendListFailure,
    loadFriendListRequest,
    loadFriendListSuccess,
    loadRecommendFriendSuccess,
    LOAD_FRIEND_LIST_REQUEST,
    LOAD_RECOMMEND_FRIEND_REQUEST,
    removeFriendRequest,
    REMOVE_FRIEND_REQUEST,
} from '../modules/friend';

function loadFriendListAPI(token: string) {
    return axios({
        method: 'GET',
        url: '/friend',
        headers: { Authorization: `Bearer ${token}` },
    });
}

function* loadFriendList(action: ReturnType<typeof loadFriendListRequest>) {
    try {
        const result: AxiosResponse<IAuth[]> = yield call(loadFriendListAPI, action.token);
        yield put(loadFriendListSuccess(result.data));
    } catch (err) {
        yield put(loadFriendListFailure(err.message));
    }
}

function addFriendAPI(friendId: number) {
    return axios({
        method: 'POST',
        url: `/friend/${friendId}`,
        headers: { Authorization: `Bearer ${getToken()}` },
    });
}

function* addFriend(action: ReturnType<typeof addFriendRequest>) {
    try {
        yield call(addFriendAPI, action.friendId);
    } catch (err) {
        console.log(err);
    }
}
function* addRecommendFriend(action: ReturnType<typeof addRecommendFriendRequest>) {
    try {
        yield call(addFriendAPI, action.friendId);
        yield put(addRecommendFriendSuccess(action.friendId));
    } catch (err) {
        console.log(err);
    }
}

function removeFriendAPI(friendId: number) {
    return axios({
        method: 'DELETE',
        url: `/friend/${friendId}`,
        headers: { Authorization: `Bearer ${getToken()}` },
    });
}

function* removeFriend(action: ReturnType<typeof removeFriendRequest>) {
    try {
        yield call(removeFriendAPI, action.friendId);
        yield put(loadFriendListRequest(getToken() as string));
    } catch (err) {
        console.log(err);
    }
}

function loadRecommendFriendAPI() {
    return axios({
        method: 'GET',
        url: `/user/random`,
    });
}

function* loadRecommendFriend() {
    try {
        const result: AxiosResponse<IAuth[]> = yield call(loadRecommendFriendAPI);
        yield put(loadRecommendFriendSuccess(result.data));
    } catch (err) {
        console.log(err);
    }
}

function* watchLoadFriendList() {
    yield takeLatest(LOAD_FRIEND_LIST_REQUEST, loadFriendList);
}
function* watchAddFriend() {
    yield takeLatest(ADD_FRIEND_REQUEST, addFriend);
}
function* watchAddRecommendFriend() {
    yield takeLatest(ADD_RECOMMEND_FRIEND_REQUEST, addRecommendFriend);
}
function* watchRemoveFriend() {
    yield takeLatest(REMOVE_FRIEND_REQUEST, removeFriend);
}

function* watchLoadRecommendFriend() {
    yield takeLatest(LOAD_RECOMMEND_FRIEND_REQUEST, loadRecommendFriend);
}

export default function* friendSaga() {
    yield all([
        fork(watchLoadFriendList),
        fork(watchLoadRecommendFriend),
        fork(watchAddFriend),
        fork(watchAddRecommendFriend),
        fork(watchRemoveFriend),
    ]);
}
