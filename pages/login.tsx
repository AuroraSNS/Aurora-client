import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LogInForm from '../components/auth/LogInForm';
import SignUpForm from '../components/auth/SignUpForm';
import { RootState } from '../reducers';
import Global from '../styles/Global';

const Login = () => {
    const router = useRouter();
    const { logInDone } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (logInDone || localStorage.getItem('accessToken')) {
            router.push('/');
        }
    }, [router, logInDone]);

    return (
        <>
            <Global />
            <Wrapper>
                <div>
                    <LogInForm />
                    {/* <SignUpForm /> */}
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    background: url('/images/login-cover.png');
    background-position: right;
    & > div {
        width: 50%;
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 1240px) {
        & > div {
            background-color: none;
            margin: auto;
            width: min-content;
            height: min-content;
        }
    }
    /* @media screen and (max-width: 768px) {
        background-color: white;
    } */
`;

export default Login;
