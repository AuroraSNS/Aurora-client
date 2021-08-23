import React from 'react';
import { IconGoogle } from '../../../common/Icon';
import { Wrapper } from './style';

const GoogleOAuthPresenter = () => (
    <Wrapper>
        <a href="https://api.aurora.center/oauth2/authorization/google?redirect_uri=http://localhost:3000/">
            <IconGoogle />
            <span>구글로 로그인</span>
        </a>
    </Wrapper>
);

export default GoogleOAuthPresenter;
