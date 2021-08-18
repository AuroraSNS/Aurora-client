import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequest } from '../../../actions/user';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../reducers';
import ErrorMessage from '../../common/ErrorMessage';
import { Logo } from '../../common/Icon';
import Loading from '../../common/Loading';
import GoogleOAuthBtn from '../googleOAuthBtn';
import FacebookOAuthBtn from '../facebookOAuthBtn';
import { Form } from './style';

const LogInForm = () => {
    const dispatch = useDispatch();
    const { logInLoading, logInDone, logInError } = useSelector((state: RootState) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(logInRequest({ email, password }));
        },
        [dispatch, email, password],
    );

    return (
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
            <GoogleOAuthBtn />
            <FacebookOAuthBtn />
            {(logInLoading || logInDone) && <Loading />}
        </Form>
    );
};

export default LogInForm;
