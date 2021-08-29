import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequest } from '../../../actions/user';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../redux/modules/reducer';
import LoginFormPresenter from './LoginFormPresenter';

const LoginFormContainer = () => {
    const dispatch = useDispatch();
    const { logInLoading, logInDone, logInError } = useSelector((state: RootState) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(logInRequest({ email, password }));
        },
        [dispatch, email, password],
    );
    return (
        <LoginFormPresenter
            email={email}
            onChangeEmail={onChangeEmail}
            password={password}
            onChangePassword={onChangePassword}
            onSubmit={onSubmit}
            logInLoading={logInLoading}
            logInDone={logInDone}
            logInError={logInError}
        />
    );
};

export default LoginFormContainer;
