import React from 'react';
import LoginFormContainer from './loginForm/LoginFormContainer';
import SignupFormContainer from './signupForm/SignupFormContainer';
import { Wrapper } from './style';

type Props = {
    view: boolean;
    onChangeView: () => void;
};

const LoginPresenter = ({ view, onChangeView }: Props) => (
    <Wrapper>
        <div>
            {view ? (
                <LoginFormContainer onChangeView={onChangeView} />
            ) : (
                <SignupFormContainer onChangeView={onChangeView} />
            )}
        </div>
    </Wrapper>
);

export default LoginPresenter;
