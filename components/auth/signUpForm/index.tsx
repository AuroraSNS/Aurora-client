import React from 'react';
import { useDispatch } from 'react-redux';
import FacebookOAuthBtn from '../facebookOAuthBtn';
import GoogleOAuthBtn from '../googleOAuthBtn';
import { Form } from './style';

const SignUpForm = () => {
    const dispatch = useDispatch();

    return (
        <Form>
            <img className="logo" src="images/logo.png" alt="logo" />
            <div className="title">만나서 반가워요!</div>
            <input name="email" type="email" placeholder="이메일" required />
            <input name="password" type="password" placeholder="비밀번호" required />
            {/* {loginErrorMsg ? <ErrorMessage>{loginErrorMsg}</ErrorMessage> : ''} */}
            <button type="submit">로그인</button>
            <span>계정이 없으신가요?</span>
            <GoogleOAuthBtn />
            <FacebookOAuthBtn />
        </Form>
    );
};

export default SignUpForm;
