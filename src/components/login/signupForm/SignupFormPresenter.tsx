/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IOnSubmit, ISetState } from '../../../interfaces/data';
import ErrorMessage from '../../common/ErrorMessage';
import { IconLogoBig } from '../../common/Icon';
import Loading from '../../common/Loading';
import { Form } from './style';

type Props = {
    email: string;
    onChangeEmail: ISetState;
    name: string;
    onChangeName: ISetState;
    password: string;
    onChangePassword: ISetState;
    passwordConfirm: string;
    onChangePasswordConfirm: ISetState;
    onSubmit: IOnSubmit;
    signUpLoading: boolean;
    signUpError: boolean;
    onChangeView: () => void;
};

const SignupFormPresenter = ({
    email,
    onChangeEmail,
    name,
    onChangeName,
    password,
    onChangePassword,
    passwordConfirm,
    onChangePasswordConfirm,
    onSubmit,
    signUpLoading,
    signUpError,
    onChangeView,
}: Props) => (
    <Form onSubmit={onSubmit}>
        <IconLogoBig>Aurora</IconLogoBig>
        <div className="title">회원가입</div>
        <input name="email" type="email" value={email} onChange={onChangeEmail} placeholder="이메일" required />
        <input name="name" type="text" value={name} onChange={onChangeName} placeholder="이름" required />
        <input
            name="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
            required
        />
        <input
            name="passwordConfirm"
            type="password"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            placeholder="비밀번호확인"
            required
        />
        {signUpError && <ErrorMessage message="이미 존재하는 이메일입니다." />}
        <button type="submit">회원가입</button>
        <span onClick={onChangeView}>계정이 있으신가요?</span>
        {signUpLoading && <Loading />}
    </Form>
);

export default SignupFormPresenter;
