import styled from 'styled-components';

export const Form = styled.form`
    /* border: 1px solid gray; */
    background: #ffffff;
    box-shadow: 0px 0px 30px 5px rgba(82, 82, 82, 0.15);
    padding: 50px 30px 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button[type='submit'] {
        ${({ theme }) => theme.textStyles.H14};
        background: ${({ theme }) => theme.colors.gradient};
        width: 110px;
        padding: 10px 0;
        border-radius: 50px;
        color: #ffffff;
    }
`;

export const ImageWrapper = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    justify-content: center;
    position: relative;
    button {
        position: absolute;
        bottom: 0;
        right: -30px;
        ${({ theme }) => theme.smbtn}
    }
    margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    span {
        margin-right: 20px;
    }
    label {
        margin-right: 30px;
    }
    input {
        background: rgba(128, 128, 128, 0.2);
        padding: 5px 10px;
        border-radius: 15px;
    }
    margin-bottom: 30px;
`;
