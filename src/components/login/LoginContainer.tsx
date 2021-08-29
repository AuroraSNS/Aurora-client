import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/modules/reducer';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {
    const router = useRouter();
    const { logInDone } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (logInDone || localStorage.getItem('accessToken')) {
            router.push('/');
        }
    }, [router, logInDone]);
    return <LoginPresenter />;
};

export default LoginContainer;
