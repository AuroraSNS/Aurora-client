import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useToggle from '../../hooks/useToggle';
import { RootState } from '../../redux/modules/reducer';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {
    const router = useRouter();
    const { logInDone } = useSelector((state: RootState) => state.user);
    const [view, onChangeView, setView] = useToggle(true);

    const viewLogin = useCallback(() => {
        setView(true);
    }, []);

    useEffect(() => {
        if (logInDone || localStorage.getItem('accessToken')) {
            router.push('/');
        }
    }, [router, logInDone]);
    return <LoginPresenter view={view} onChangeView={onChangeView} viewLogin={viewLogin} />;
};

export default LoginContainer;
