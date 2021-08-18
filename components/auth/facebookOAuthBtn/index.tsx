import React from 'react';
import { IconFacebook } from '../../common/Icon';
import { Wrapper } from './style';

const FacebookOAuthBtn = () => (
    <Wrapper>
        <button type="button">
            <IconFacebook />
            <span>페이스북으로 로그인</span>
        </button>
    </Wrapper>
);

export default FacebookOAuthBtn;
