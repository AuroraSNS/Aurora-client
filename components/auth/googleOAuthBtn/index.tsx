import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import axios from 'axios';

import { Wrapper } from './style';
import { IconGoogle } from '../../common/Icon';

const GoogleOAuthBtn = () => {
    const router = useRouter();

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (googleAuthURL) {
    //         router.push(googleAuthURL);
    //     }
    // }, [googleAuthURL]);

    const googleOAuthLogin = useCallback(() => {
        const res = axios({
            method: 'GET',
            url: 'https://api.aurora.center/oauth2/authorization/google',
            withCredentials: true,
        });
        console.log(res);
    }, []);

    // const googleOAuthLogin = useCallback(() => {
    //     const res = axios({
    //         method: 'GET',
    //         url: 'https://api.aurora.center/user/me',
    //         withCredentials: true,
    //     });
    //     console.log(res);
    // }, []);

    return (
        <Wrapper>
            <button type="button" onClick={googleOAuthLogin}>
                <IconGoogle />
                <span>구글로 로그인</span>
            </button>
        </Wrapper>
    );
};

export default GoogleOAuthBtn;
