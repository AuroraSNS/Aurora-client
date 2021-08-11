import Link from 'next/link';
import styled from 'styled-components';
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import useInput from '../../hooks/useInput';
import { logInRequest } from '../../actions/user';
import GoogleOAuthSignin from './GoogleOAuthBtn';
import FacebookOAuthSignin from './FacebookOAuthBtn';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const LogInForm = () => {
    const dispatch = useDispatch();
    const { logInLoading, logInDone, logInError } = useSelector((state) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    // // google login
    // useEffect(() => {
    //     dispatch(getAccessTokenAction());
    // }, []);

    // // just login
    // useEffect(() => {
    //     dispatch(getAccessTokenAction());
    // }, [loginLoading]);

    // useEffect(() => {
    //     if (accessToken) {
    //         dispatch(signinSuccessAction(accessToken));
    //     }
    // }, [accessToken]);

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         router.push('/');
    //     }
    // }, [isLoggedIn]);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(logInRequest({ email, password }));
        },
        [dispatch, email, password],
    );

    return (
        <Form onSubmit={onSubmit}>
            <img className="logo" src="images/logo.png" alt="logo" />
            <div className="title">로그인</div>
            <input name="email" type="email" value={email} onChange={onChangeEmail} placeholder="이메일" required />
            <input
                name="password"
                type="password"
                value={password}
                onChange={onChangePassword}
                placeholder="비밀번호"
                required
            />
            {logInError && <ErrorMessage message="이미 존재하는 이메일입니다." />}
            <button type="submit">로그인</button>
            <span>계정이 없으신가요?</span>
            <GoogleOAuthSignin />
            <FacebookOAuthSignin />
            {(logInLoading || logInDone) && <Loading />}
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 422px;
    padding: 38px 48px;
    box-shadow: 8px 5px 50px 5px rgba(111, 111, 111, 0.15);
    .logo {
        width: 200px;
        align-self: center;
        margin-bottom: 30px;
    }
    .title {
        font-weight: 600;
        font-size: 18px;
    }
    input {
        border-bottom: 1px solid #dcdcdc;
        height: 40px;
        padding: 0 10px;
        margin-top: 30px;
    }
    button[type='submit'] {
        width: 330px;
        height: 45px;
        border-radius: 50px;
        background-color: rgba(177, 177, 177, 0.5);
        font-size: 14px;
        font-weight: 600;
        color: white;
        margin-top: 40px;
        &:hover {
            background-color: rgba(172, 141, 224, 0.5);
        }
    }
    & > span {
        margin-top: 12px;
        font-size: 12px;
        color: #707070;
        border-bottom: 1px solid #707070;
        cursor: pointer;
        align-self: center;
        margin-bottom: 40px;
    }
`;
export default LogInForm;
