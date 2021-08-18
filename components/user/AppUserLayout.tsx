import { ReactChild } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    html,
    body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    #__next {
    height: 100%;

    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`;

type Props = {
    children: ReactChild;
};

const AppLayout = ({ children }: Props) => (
    <>
        <Global />
        <Wrapper>
            <UserBox>
                <Logo src="/images/logo.png" />
                <MainComponent>{children}</MainComponent>
            </UserBox>
        </Wrapper>
    </>
);

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const UserBox = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40rem;
    width: 30rem;
    min-width: 25rem;
    border: 1px solid #f0f0f0;
    border-radius: 0.4rem;
    box-shadow: 0 0.2rem 0.3rem 0.2rem rgba(85, 85, 85, 0.25);
`;
const Logo = styled.img`
    margin: 3rem 0 2rem 0;
    width: 10rem;
`;

const MainComponent = styled.div`
    ${({ theme }) => theme.flexCenter}
    flex-direction: column;
    justify-content: space-evenly;
`;

export default AppLayout;
