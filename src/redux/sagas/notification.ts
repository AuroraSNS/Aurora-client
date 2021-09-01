import axios, { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getToken } from '.';
import { IAllNotification, IFriendRequestList, INotification } from '../../interfaces/notification';
import { loadFriendListRequest } from '../modules/friend';
import {
    loadAllNotificationFailure,
    loadAllNotificationRequest,
    loadAllNotificationSuccess,
    loadFriendNotificationFailure,
    loadFriendNotificationRequest,
    loadFriendNotificationSuccess,
    loadNotificationFailure,
    loadNotificationRequest,
    loadNotificationSuccess,
    LOAD_ALL_NOTIFICATION_REQUEST,
    LOAD_FRIEND_NOTIFICATION_REQUEST,
    LOAD_NOTIFICATION_REQUEST,
    readNotificationRequest,
    READ_NOTIFICATION_REQUEST,
} from '../modules/notification';

function loadAllNotificationAPI(token: string) {
    return axios({
        method: 'GET',
        url: '/notification/count',
        headers: { Authorization: `Bearer ${token}` },
    });
}

function* loadAllNotification(action: ReturnType<typeof loadAllNotificationRequest>) {
    try {
        const result: AxiosResponse<IAllNotification> = yield call(loadAllNotificationAPI, action.token);
        yield put(loadAllNotificationSuccess(result.data));
    } catch (err) {
        yield put(loadAllNotificationFailure(err.message));
    }
}

function loadNotificationAPI(token: string) {
    return axios({
        method: 'GET',
        url: '/notification',
        headers: { Authorization: `Bearer ${token}` },
    });
}

function* loadNotification(action: ReturnType<typeof loadNotificationRequest>) {
    try {
        const result: AxiosResponse<INotification[]> = yield call(loadNotificationAPI, action.token);
        yield put(loadNotificationSuccess(result.data));
    } catch (err) {
        yield put(loadNotificationFailure(err.message));
    }
}

function loadFriendNotificationAPI(token: string) {
    return axios({
        method: 'GET',
        url: '/notification/friend',
        headers: { Authorization: `Bearer ${token}` },
    });
}

function* loadFriendNotification(action: ReturnType<typeof loadFriendNotificationRequest>) {
    try {
        const result: AxiosResponse<INotification[]> = yield call(loadFriendNotificationAPI, action.token);
        const data: IFriendRequestList[] = result.data.map((ele) => ({ id: ele.id, sender: ele.sender }));
        yield put(loadFriendNotificationSuccess(data));
    } catch (err) {
        yield put(loadFriendNotificationFailure(err.message));
    }
}

function readNotificationAPI(notiType: string, id: number) {
    return axios({
        method: 'PATCH',
        url: `/notification/${notiType}/${id}`,
        headers: { Authorization: `Bearer ${getToken()}` },
    });
}

function* readNotification(action: ReturnType<typeof readNotificationRequest>) {
    try {
        yield call(readNotificationAPI, action.notiType, action.id);
        yield put(loadAllNotificationRequest(getToken() as string));
        if (action.notiType === 'POST' || action.notiType === 'FRIEND_ACCEPT') {
            yield put(loadNotificationRequest(getToken() as string));
        } else {
            yield put(loadFriendListRequest(getToken() as string));
            yield put(loadFriendNotificationRequest(getToken() as string));
        }
    } catch (err) {
        console.log(err);
    }
}

function* watchLoadAllNotification() {
    yield takeLatest(LOAD_ALL_NOTIFICATION_REQUEST, loadAllNotification);
}

function* watchLoadNotification() {
    yield takeLatest(LOAD_NOTIFICATION_REQUEST, loadNotification);
}

function* watchLoadFriendNotification() {
    yield takeLatest(LOAD_FRIEND_NOTIFICATION_REQUEST, loadFriendNotification);
}

function* watchReadNotification() {
    yield takeLatest(READ_NOTIFICATION_REQUEST, readNotification);
}

export default function* notificationSaga() {
    yield all([
        fork(watchLoadAllNotification),
        fork(watchLoadNotification),
        fork(watchLoadFriendNotification),
        fork(watchReadNotification),
    ]);
}
