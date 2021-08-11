import styled from 'styled-components';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { getGoogleAuthURLAction } from '../../actions/user.ts';
import { IconGoogle } from '../Icon';

const GoogleOAuthBtn = () => {
    const router = useRouter();

    const dispatch = useDispatch();
    // const { googleAuthURL } = useSelector((state) => state.user);

    // useEffect(() => {
    //     if (googleAuthURL) {
    //         router.push(googleAuthURL);
    //     }
    // }, [googleAuthURL]);

    // const getGoogleAuthURL = useCallback((e) => {
    //     e.preventDefault();
    //     dispatch(getGoogleAuthURLAction());
    // });

    return (
        <Wrapper>
            <button type="button">
                <IconGoogle />
                <span>구글로 로그인</span>
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-bottom: 10px;
    border: solid 1px transparent;
    border-radius: 50px;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #a18afc, #b6d8f8, #ffbebe);
    background-origin: border-box;
    background-clip: content-box, border-box;
    display: flex;
    justify-content: center;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 50px;
        font-size: 12px;
        width: 320px;
        height: 45px;
        &:hover {
            font-size: 13px;
        }
        span {
            margin-left: 8px;
        }
    }
`;

export default GoogleOAuthBtn;
