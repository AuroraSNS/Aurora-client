import styled from 'styled-components';
import LoginForm from '../components/auth/LoginForm';
import SigninForm from '../components/auth/SigninForm';
import Global from '../styles/Global';

const Login = () => (
    <>
        <Global />
        <Wrapper>
            <div>
                <LoginForm />
                {/* <SigninForm /> */}
            </div>
        </Wrapper>
    </>
);

const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    background: gray;
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
    @media screen and (max-width: 768px) {
        background-color: white;
    }
`;

export default Login;
