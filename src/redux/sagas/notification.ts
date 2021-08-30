import axios, { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { IAllNotification } from '../../interfaces/data/notification';
import { createSampleAllNotification } from '../../util/sample';
import {
    loadAllNotificationFailure,
    loadAllNotificationRequest,
    loadAllNotificationSuccess,
    LOAD_ALL_NOTIFICATION_REQUEST,
} from '../modules/notification';

function loadAllNotificationAPI(token: string) {
    return axios({
        method: 'GET',
        url: `/chat/rooms`,
        headers: { Authorization: `Bearer ${token}` },
    });
}

function* loadAllNotification(action: ReturnType<typeof loadAllNotificationRequest>) {
    try {
        // const result: AxiosResponse<IAllNotification> = yield call(loadAllNotificationAPI, action.token);
        // yield put(loadAllNotificationSuccess(result.data));
        yield put(loadAllNotificationSuccess(createSampleAllNotification()));
    } catch (err) {
        yield put(loadAllNotificationFailure(err.message));
    }
}

function* watchLoadAllNotification() {
    yield takeLatest(LOAD_ALL_NOTIFICATION_REQUEST, loadAllNotification);
}

export default function* notificationSaga() {
    yield all([fork(watchLoadAllNotification)]);
}
