import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 422px;
    padding: 38px 48px;
    box-shadow: 8px 5px 50px 5px rgba(111, 111, 111, 0.15);
    & > svg {
        width: 200px;
        align-self: center;
        margin-bottom: 30px;
    }
    .title {
        ${({ theme }) => theme.textStyles.H16}
    }
    input {
        border-bottom: 1px solid #dcdcdc;
        height: 40px;
        padding: 0 10px;
        margin-top: 30px;
        &::placeholder {
            ${({ theme }) => theme.textStyles.P14}
        }
    }
    button[type='submit'] {
        ${({ theme }) => theme.textStyles.H14}
        width: 330px;
        height: 45px;
        border-radius: 50px;
        background-color: rgba(177, 177, 177, 0.5);
        color: white;
        margin-top: 40px;
        &:hover {
            background: ${({ theme }) => theme.colors.gradient};
        }
    }
    & > span {
        ${({ theme }) => theme.textStyles.P12}
        margin-top: 12px;
        color: #707070;
        border-bottom: 1px solid #707070;
        cursor: pointer;
        align-self: center;
        margin-bottom: 40px;
    }
`;

export const ErrorMessage = styled.div`
    padding-top: 0.2rem;
    color: #755bdb;
    font-size: 0.9rem;
`;
