import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../redux/modules/reducer';
import { logInRequest } from '../../../redux/modules/user';
import LoginFormPresenter from './LoginFormPresenter';

type Props = {
    onChangeView: () => void;
};

const LoginFormContainer = ({ onChangeView }: Props) => {
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
            onChangeView={onChangeView}
        />
    );
};

export default LoginFormContainer;
