import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../redux/modules/reducer';
import { logInRequest, signUpClear, signUpRequest } from '../../../redux/modules/user';
import SignupFormPresenter from './SignupFormPresenter';

type Props = {
    onChangeView: () => void;
    viewLogin: () => void;
};

const SignupFormContainer = ({ onChangeView, viewLogin }: Props) => {
    const dispatch = useDispatch();
    const { signUpLoading, signUpDone, signUpError } = useSelector((state: RootState) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [name, onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordConfirm, onChangePasswordConfirm] = useInput('');

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(signUpRequest({ email, name, password, passwordConfirm }));
        },
        [dispatch, email, name, password, passwordConfirm],
    );
    useEffect(() => {
        if (signUpDone) {
            dispatch(signUpClear());
            viewLogin();
        }
    }, [signUpDone]);
    return (
        <SignupFormPresenter
            email={email}
            onChangeEmail={onChangeEmail}
            name={name}
            onChangeName={onChangeName}
            password={password}
            onChangePassword={onChangePassword}
            passwordConfirm={passwordConfirm}
            onChangePasswordConfirm={onChangePasswordConfirm}
            onSubmit={onSubmit}
            signUpLoading={signUpLoading}
            signUpError={signUpError}
            onChangeView={onChangeView}
        />
    );
};

export default SignupFormContainer;
