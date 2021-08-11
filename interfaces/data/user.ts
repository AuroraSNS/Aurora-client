export interface ILogInForm {
    email: string;
    password: string;
}

export interface IUser {
    id: number;
    name: string;
    avator: string;
}

export interface Me extends IUser {
    email: string;
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
