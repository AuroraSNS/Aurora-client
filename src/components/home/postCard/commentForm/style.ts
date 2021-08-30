import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    input {
        flex: 1;
        background-color: #f0f2f5;
        border-radius: 10px;
        height: 25px;
        padding: 0 10px;
        width: 100%;
        &::placeholder {
            ${({ theme }) => theme.textStyles.P12}
        }
    }
    button {
        ${({ theme }) => theme.flexCenter}
        width: 40px;
        height: 28px;
        margin-left: 20px;
        background: ${({ theme }) => theme.colors.gradient};
        border-radius: 50px;
        div {
            background: url('images/aurora_icon.png') no-repeat -44px -172px;
            width: 14px;
            height: 10px;
        }
    }
`;
