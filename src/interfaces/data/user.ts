export interface ILogInForm {
    email: string;
    password: string;
}
export interface IAuth {
    id: number;
    name: string;
    avatar: string;
}

export interface IUserProfile extends IAuth {
    bio: string;
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
