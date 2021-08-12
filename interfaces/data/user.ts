export interface ILogInForm {
    email: string;
    password: string;
}

export interface IAuth {
    id: number;
    name: string;
    avator: string;
}

export interface IUserInfo extends IAuth {
    bio: string;
}

export interface Me extends IUserInfo {
    email: string;
    bio: string;
}

export interface UserState {
    me: null | Me;
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
    modifyProfileLoading: boolean;
    modifyProfileDone: boolean;
    modifyProfileError: null | string;
}
