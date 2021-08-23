import React from 'react';
import LoginFormContainer from './loginForm/LoginFormContainer';
import { Wrapper } from './style';

const LoginPresenter = () => (
    <Wrapper>
        <div>
            <LoginFormContainer />
        </div>
    </Wrapper>
);

export default LoginPresenter;
