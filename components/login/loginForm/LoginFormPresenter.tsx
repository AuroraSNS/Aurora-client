import React from 'react';
import { IOnSubmit, ISetState } from '../../../interfaces/data';
import ErrorMessage from '../../common/ErrorMessage';
import Loading from '../../common/Loading';
import { Logo } from '../../layout/header/style';
import GoogleOAuthContainer from './googleOAuth/GoogleOAuthContainer';
import { Form } from './style';

type Props = {
    email: string;
    onChangeEmail: ISetState;
    password: string;
    onChangePassword: ISetState;
    onSubmit: IOnSubmit;
    logInLoading: boolean;
    logInDone: boolean;
    logInError: boolean;
};

const LoginFormPresenter = ({
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onSubmit,
    logInLoading,
    logInDone,
    logInError,
}: Props) => (
    <Form onSubmit={onSubmit}>
        <Logo />
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
        <GoogleOAuthContainer />
        {(logInLoading || logInDone) && <Loading />}
    </Form>
);

export default LoginFormPresenter;
