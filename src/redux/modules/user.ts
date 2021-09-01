/* eslint-disable no-param-reassign */
import produce from 'immer';

import { IAuth, ILogInForm, IMe, ISignUpForm, IUserProfile, IUserState, UserAction } from '../../interfaces/user';

// 액션 상수
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST' as const;
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS' as const;
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE' as const;

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST' as const;
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE' as const;
export const SIGN_UP_CLEAR = 'SIGN_UP_CLEAR' as const;

export const LOAD_PROFILE_REQUEST = 'LOAD_PROFILE_REQUEST' as const;
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS' as const;
export const LOAD_PROFILE_FAILURE = 'LOAD_PROFILE_FAILURE' as const;

export const MODIFY_PROFILE_REQUEST = 'MODIFY_PROFILE_REQUEST' as const;
export const MODIFY_PROFILE_SUCCESS = 'MODIFY_PROFILE_SUCCESS' as const;
export const MODIFY_PROFILE_FAILURE = 'MODIFY_PROFILE_FAILURE' as const;
export const MODIFY_PROFILE_CLEAR = 'MODIFY_PROFILE_CLEAR' as const;

export const LOAD_USER_PROFILE_REQUEST = 'LOAD_USER_PROFILE_REQUEST' as const;
export const LOAD_USER_PROFILE_SUCCESS = 'LOAD_USER_PROFILE_SUCCESS' as const;
export const LOAD_USER_PROFILE_FAILURE = 'LOAD_USER_PROFILE_FAILURE' as const;

export const SEARCH_USER_REQUEST = 'SEARCH_USER_REQUEST' as const;
export const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS' as const;
export const SEARCH_USER_FAILURE = 'SEARCH_USER_FAILURE' as const;

export const MODIFY_LIKELIST = 'MODIFY_LIKELIST' as const;

// initial state
export const initialState: IUserState = {
    me: null,
    user: null,
    searchList: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    loadProfileLoading: false,
    loadProfileDone: false,
    loadProfileError: null,
    loadUserProfileLoading: false,
    loadUserProfileDone: false,
    loadUserProfileError: null,
    modifyProfileLoading: false,
    modifyProfileDone: false,
    modifyProfileError: null,
};

export default function reducer(state = initialState, action: UserAction) {
    return produce(state, (draft: IUserState) => {
        switch (action.type) {
            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.logInDone = true;
                break;
            case LOG_IN_FAILURE:
                draft.logInLoading = false;
                draft.logInError = action.error;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = null;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false;
                draft.logOutDone = true;
                draft.me = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
                break;
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpError = action.error;
                break;
            case SIGN_UP_CLEAR:
                draft.signUpLoading = false;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case LOAD_PROFILE_REQUEST:
                draft.loadProfileLoading = true;
                draft.loadProfileDone = false;
                draft.loadProfileError = null;
                break;
            case LOAD_PROFILE_SUCCESS:
                draft.loadProfileLoading = false;
                draft.loadProfileDone = true;
                draft.me = action.data as IMe;
                break;
            case LOAD_PROFILE_FAILURE:
                draft.loadProfileLoading = false;
                draft.loadProfileError = action.error;
                break;
            case LOAD_USER_PROFILE_REQUEST:
                draft.loadUserProfileLoading = true;
                draft.loadUserProfileDone = false;
                draft.loadUserProfileError = null;
                break;
            case LOAD_USER_PROFILE_SUCCESS:
                draft.loadUserProfileLoading = false;
                draft.loadUserProfileDone = true;
                draft.user = action.data;
                break;
            case LOAD_USER_PROFILE_FAILURE:
                draft.loadUserProfileLoading = false;
                draft.loadUserProfileError = action.error;
                break;
            case MODIFY_PROFILE_REQUEST:
                draft.modifyProfileLoading = true;
                draft.modifyProfileDone = false;
                draft.modifyProfileError = null;
                break;
            case MODIFY_PROFILE_SUCCESS:
                draft.modifyProfileLoading = false;
                draft.modifyProfileDone = true;
                break;
            case MODIFY_PROFILE_FAILURE:
                draft.modifyProfileLoading = false;
                draft.modifyProfileError = action.error;
                break;
            case MODIFY_PROFILE_CLEAR:
                draft.modifyProfileLoading = false;
                draft.modifyProfileDone = false;
                draft.modifyProfileError = null;
                break;
            case MODIFY_LIKELIST: {
                let tmp = (draft.me as IMe).likeList;
                if (tmp.includes(action.postId)) {
                    (draft.me as IMe).likeList = tmp.filter((postId) => postId !== action.postId);
                } else {
                    tmp.push(action.postId);
                }
                break;
            }
            case SEARCH_USER_REQUEST:
                draft.searchList = null;
                break;
            case SEARCH_USER_SUCCESS:
                draft.searchList = action.data;
                break;
            default:
                break;
        }
    });
}

// 액션 크리에이터
export const logInRequest = (data: ILogInForm) => ({
    type: LOG_IN_REQUEST,
    data,
});

export const logInSuccess = () => ({
    type: LOG_IN_SUCCESS,
});

export const logInFailure = (error: string) => ({
    type: LOG_IN_FAILURE,
    error,
});

export const logOutRequest = () => ({
    type: LOG_OUT_REQUEST,
});

export const logOutSuccess = () => ({
    type: LOG_OUT_SUCCESS,
});

export const logOutFailure = (error: string) => ({
    type: LOG_OUT_FAILURE,
    error,
});

export const signUpRequest = (data: ISignUpForm) => ({
    type: SIGN_UP_REQUEST,
    data,
});

export const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS,
});

export const signUpFailure = (error: string) => ({
    type: SIGN_UP_FAILURE,
    error,
});

export const signUpClear = () => ({
    type: SIGN_UP_CLEAR,
});

export const loadProfileRequest = (token: string) => ({
    type: LOAD_PROFILE_REQUEST,
    token,
});

export const loadProfileSuccess = (data: IMe) => ({
    type: LOAD_PROFILE_SUCCESS,
    data,
});

export const loadProfileFailure = (error: string) => ({
    type: LOAD_PROFILE_FAILURE,
    error,
});

export const loadUserProfileRequest = (userId: number, token: string) => ({
    type: LOAD_USER_PROFILE_REQUEST,
    userId,
    token,
});

export const loadUserProfileSuccess = (data: IUserProfile) => ({
    type: LOAD_USER_PROFILE_SUCCESS,
    data,
});

export const loadUserProfileFailure = (error: string) => ({
    type: LOAD_USER_PROFILE_FAILURE,
    error,
});

export const modifyProfileRequest = (data: FormData) => ({
    type: MODIFY_PROFILE_REQUEST,
    data,
});

export const modifyProfileSuccess = () => ({
    type: MODIFY_PROFILE_SUCCESS,
});

export const modifyProfileFailure = (error: string) => ({
    type: MODIFY_PROFILE_FAILURE,
    error,
});

export const modifyProfileClear = () => ({
    type: MODIFY_PROFILE_CLEAR,
});

export const modifyLikelist = (postId: number) => ({
    type: MODIFY_LIKELIST,
    postId,
});

export const searchUserRequest = (searchString: string) => ({
    type: SEARCH_USER_REQUEST,
    searchString,
});

export const searchUserSuccess = (data: IAuth[]) => ({
    type: SEARCH_USER_SUCCESS,
    data,
});
