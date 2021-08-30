import styled from 'styled-components';

export const Wrapper = styled.header`
    background: #ffffff;
    box-shadow: 0px 4px 2px rgba(119, 119, 119, 0.25);

    width: 100%;
    position: fixed;
    z-index: 9;
    top: 0;
    .inner {
        ${({ theme }) => theme.flexCenter}
        justify-content: space-between;
        height: 80px;
    }
`;

export const LogInBtn = styled.button`
    margin-right: 30px;
    padding: 10px;
    ${({ theme }) => theme.textStyles.H16}
`;

export const Logo = styled.div`
    /* border: 1px solid gray; */
    margin-left: 37px;
    flex: none;
    a {
        display: block;
        width: 91px;
        height: 24px;
        color: transparent;
        background: url('/images/aurora_icon.png') no-repeat -171px -17px;
    }
`;
