import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../redux/modules/reducer';
import { logInRequest, signUpRequest } from '../../../redux/modules/user';
import SignupFormPresenter from './SignupFormPresenter';

type Props = {
    onChangeView: () => void;
};

const SignupFormContainer = ({ onChangeView }: Props) => {
    const dispatch = useDispatch();
    const { signUpLoading, signUpDone, signUpError } = useSelector((state: RootState) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [name, onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(signUpRequest({ email, name, password }));
        },
        [dispatch, email, password],
    );
    useEffect(() => {
        if (signUpDone) {
            onChangeView();
        }
    }, []);
    return (
        <SignupFormPresenter
            email={email}
            onChangeEmail={onChangeEmail}
            name={name}
            onChangeName={onChangeName}
            password={password}
            onChangePassword={onChangePassword}
            onSubmit={onSubmit}
            signUpLoading={signUpLoading}
            signUpError={signUpError}
            onChangeView={onChangeView}
        />
    );
};

export default SignupFormContainer;
