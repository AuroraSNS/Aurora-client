/* eslint-disable no-restricted-globals */
import { destroyCookie, setCookie } from 'nookies';
import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
    loadProfileFailure,
    loadProfileRequest,
    loadProfileSuccess,
    loadUserProfileFailure,
    loadUserProfileRequest,
    loadUserProfileSuccess,
    LOAD_PROFILE_REQUEST,
    LOAD_USER_PROFILE_REQUEST,
    logInFailure,
    logInRequest,
    logInSuccess,
    logOutFailure,
    logOutSuccess,
    LOG_IN_REQUEST,
    LOG_OUT_REQUEST,
    modifyProfileFailure,
    modifyProfileRequest,
    modifyProfileSuccess,
    MODIFY_PROFILE_REQUEST,
    signUpFailure,
    signUpRequest,
    signUpSuccess,
    SIGN_UP_REQUEST,
} from '../modules/user';
import { ILogInForm, IMe, ISignUpForm, IUserProfile } from '../../interfaces/user';
import { getToken } from '.';

function logInAPI(data: ILogInForm) {
    return axios({
        method: 'POST',
        url: '/signin',
        data,
    });
}

function* logIn(action: ReturnType<typeof logInRequest>) {
    try {
        const result: AxiosResponse<{ token: string }> = yield call(logInAPI, action.data);
        setCookie(null, 'accessToken', result.data.token, { path: '/' });
        sessionStorage.setItem('accessToken', result.data.token);
        yield put(logInSuccess());
    } catch (err) {
        yield put(logInFailure('로그인 실패'));
    }
}

function* logOut() {
    try {
        destroyCookie(null, 'accessToken');
        sessionStorage.removeItem('accessToken');
        // yield delay(1000);
        yield put(logOutSuccess());
    } catch (err) {
        yield put(logOutFailure(err.message));
    }
}

function signUpAPI(data: ISignUpForm) {
    return axios({
        method: 'POST',
        url: '/signup',
        data,
    });
}

function* signUp(action: ReturnType<typeof signUpRequest>) {
    try {
        const res: any = yield call(signUpAPI, action.data);
        console.log(res);
        yield put(signUpSuccess());
    } catch (err) {
        console.log('err', err.message);
        console.error('err', err);
        yield put(signUpFailure(err.message));
    }
}

function loadProfileAPI(token: string) {
    return axios({
        method: 'GET',
        url: '/user',
        headers: { Authorization: `Bearer ${token}` },
    });
}

function* loadProfile(action: ReturnType<typeof loadProfileRequest>) {
    try {
        const result: AxiosResponse<IMe> = yield call(loadProfileAPI, action.token);
        yield put(loadProfileSuccess(result.data));
    } catch (err) {
        yield put(loadProfileFailure(err.message));
    }
}

function loadUserProfileAPI(userId: number) {
    return axios({
        method: 'GET',
        url: `/user/${userId}`,
    });
}

function* loadUserProfile(action: ReturnType<typeof loadUserProfileRequest>) {
    try {
        const result: AxiosResponse<IUserProfile> = yield call(loadUserProfileAPI, action.userId);
        yield put(loadUserProfileSuccess(result.data));
        // yield put(loadUserProfileSuccess(createSampleUser()));
    } catch (err) {
        yield put(loadUserProfileFailure(err.message));
    }
}

function modifyProfileAPI(data: FormData) {
    return axios({
        method: 'PATCH',
        url: '/user',
        headers: { Authorization: `Bearer ${getToken()}` },
        data,
    });
}

function* modifyProfile(action: ReturnType<typeof modifyProfileRequest>) {
    try {
        yield call(modifyProfileAPI, action.data);
        yield put(modifyProfileSuccess());
    } catch (err) {
        yield put(modifyProfileFailure(err.message));
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLoadProfile() {
    yield takeLatest(LOAD_PROFILE_REQUEST, loadProfile);
}

function* watchLoadUserProfile() {
    yield takeLatest(LOAD_USER_PROFILE_REQUEST, loadUserProfile);
}

function* watchModifyProfile() {
    yield takeLatest(MODIFY_PROFILE_REQUEST, modifyProfile);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchModifyProfile),
        fork(watchLoadProfile),
        fork(watchLoadUserProfile),
    ]);
}
