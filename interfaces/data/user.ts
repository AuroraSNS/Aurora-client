export interface Me {
    id: number;
    email: string;
    name: string;
    imageUrl: string;
    phoneNumber: string;
    address: string;
}

export interface UserState {
    signupRequest: boolean;
    signedUp: boolean;
    signupError: null;
    isLoggedIn: boolean;
    loginLoading: boolean;
    googleLoading: boolean;
    loginError: null;
    accessTokenError: null;
    signoutError: null;
    updateError: null;
    me: null | Me;
    accessToken: null;
    googleAuthURL: string;
}
