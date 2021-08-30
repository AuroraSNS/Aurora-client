import axios, { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { IRoom } from '../../interfaces/data/chat';
import { loadRoomsFailure, loadRoomsRequest, loadRoomsSuccess, LOAD_ROOMS_REQUEST } from '../modules/chat';

function loadRoomsAPI(token: string) {
    return axios({
        method: 'GET',
        url: `/chat/rooms`,
        headers: { Authorization: `Bearer ${token}` },
    });
}

function* loadRooms(action: ReturnType<typeof loadRoomsRequest>) {
    try {
        const result: AxiosResponse<IRoom[]> = yield call(loadRoomsAPI, action.token);
        yield put(loadRoomsSuccess(result.data));
    } catch (err) {
        yield put(loadRoomsFailure(err.message));
    }
}

function* watchLoadRooms() {
    yield takeLatest(LOAD_ROOMS_REQUEST, loadRooms);
}

export default function* chatSaga() {
    yield all([fork(watchLoadRooms)]);
}
