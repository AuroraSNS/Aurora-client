import React from 'react';
import LoginFormContainer from './loginForm/LoginFormContainer';
import SignupFormContainer from './signupForm/SignupFormContainer';
import { Wrapper } from './style';

type Props = {
    view: boolean;
    onChangeView: () => void;
    viewLogin: () => void;
};

const LoginPresenter = ({ view, onChangeView, viewLogin }: Props) => (
    <Wrapper>
        <div>
            {view ? (
                <LoginFormContainer onChangeView={onChangeView} />
            ) : (
                <SignupFormContainer onChangeView={onChangeView} viewLogin={viewLogin} />
            )}
        </div>
    </Wrapper>
);

export default LoginPresenter;
