import {
    logInRequest,
    logInSuccess,
    logInFailure,
    logOutRequest,
    logOutSuccess,
    logOutFailure,
    signUpRequest,
    signUpSuccess,
    signUpFailure,
    signUpClear,
    loadProfileFailure,
    loadProfileRequest,
    loadProfileSuccess,
    modifyProfileClear,
    modifyProfileFailure,
    modifyProfileRequest,
    modifyProfileSuccess,
    loadUserProfileFailure,
    loadUserProfileRequest,
    loadUserProfileSuccess,
    modifyLikelist,
} from '../redux/modules/user';

export interface ILogInForm {
    email: string;
    password: string;
}
export interface ISignUpForm extends ILogInForm {
    name: string;
    passwordConfirm: string;
}
export interface IAuth {
    id: number;
    name: string;
    avatar: string;
}

export interface IUserProfile extends IAuth {
    bio: string;
    status: string;
}

export interface IMe extends IUserProfile {
    email: string;
    likeList: number[];
}

export interface IUserState {
    me: null | IMe;
    user: IUserProfile | null;
    logInLoading: boolean;
    logInDone: boolean;
    logInError: null | string;
    logOutLoading: boolean;
    logOutDone: boolean;
    logOutError: null | string;
    signUpLoading: boolean;
    signUpDone: boolean;
    signUpError: null | string;
    loadProfileLoading: boolean;
    loadProfileDone: boolean;
    loadProfileError: null | string;
    loadUserProfileLoading: boolean;
    loadUserProfileDone: boolean;
    loadUserProfileError: null | string;
    modifyProfileLoading: boolean;
    modifyProfileDone: boolean;
    modifyProfileError: null | string;
}

export type UserAction =
    | ReturnType<typeof logInRequest>
    | ReturnType<typeof logInSuccess>
    | ReturnType<typeof logInFailure>
    | ReturnType<typeof logOutRequest>
    | ReturnType<typeof logOutSuccess>
    | ReturnType<typeof logOutFailure>
    | ReturnType<typeof signUpRequest>
    | ReturnType<typeof signUpSuccess>
    | ReturnType<typeof signUpFailure>
    | ReturnType<typeof signUpClear>
    | ReturnType<typeof loadProfileRequest>
    | ReturnType<typeof loadProfileSuccess>
    | ReturnType<typeof loadProfileFailure>
    | ReturnType<typeof loadUserProfileRequest>
    | ReturnType<typeof loadUserProfileSuccess>
    | ReturnType<typeof loadUserProfileFailure>
    | ReturnType<typeof modifyProfileRequest>
    | ReturnType<typeof modifyProfileSuccess>
    | ReturnType<typeof modifyProfileFailure>
    | ReturnType<typeof modifyProfileClear>
    | ReturnType<typeof modifyLikelist>;
