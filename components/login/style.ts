import styled from 'styled-components';

export const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    background: url('/images/login-cover.webp');
    background-position: right;
    & > div {
        width: 50%;
        height: 100%;
        background-color: white;
        ${({ theme }) => theme.flexCenter}
    }
    @media screen and (max-width: 1240px) {
        & > div {
            background-color: none;
            margin: auto;
            width: min-content;
            height: min-content;
        }
    }
`;
