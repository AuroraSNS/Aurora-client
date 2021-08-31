import axios, { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getToken } from '.';
import { IAuth } from '../../interfaces/user';
import {
    addFriendRequest,
    ADD_FRIEND_REQUEST,
    loadFriendListFailure,
    loadFriendListRequest,
    loadFriendListSuccess,
    LOAD_FRIEND_LIST_REQUEST,
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

function* watchLoadFriendList() {
    yield takeLatest(LOAD_FRIEND_LIST_REQUEST, loadFriendList);
}
function* watchAddFriend() {
    yield takeLatest(ADD_FRIEND_REQUEST, addFriend);
}
function* watchRemoveFriend() {
    yield takeLatest(REMOVE_FRIEND_REQUEST, removeFriend);
}

export default function* friendSaga() {
    yield all([fork(watchLoadFriendList), fork(watchAddFriend), fork(watchRemoveFriend)]);
}
