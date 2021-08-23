import styled from 'styled-components';

export const DropBoxMsg = styled.span`
    margin-top: 5px;
    ${({ theme }) => theme.textStyles.H12}
    color: #707070;
    align-self: center;
`;

export const PreviewImage = styled.div`
    position: relative;
    height: 100%;
    div {
        height: 100%;
        position: relative;
        img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            object-fit: cover;
        }
        overflow: hidden;
    }

    span {
        position: absolute;
        top: 50px;
        left: 100px;
        font-size: 40px;
    }
    &.plus {
        opacity: 0.7;
    }
`;

export const ImageUpload = styled.div`
    ${({ theme }) => theme.textStyles.P14}
    ${({ theme }) => theme.flexCenter}
    background-color: rgba(128, 128, 128, 0.1);
    height: 100%;
    flex-direction: column;
    cursor: pointer;
    &:hover {
        background-color: rgba(128, 128, 128, 0.3);
    }
`;

export const DropBox = styled.div`
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-radius: 20px;
    padding: 10px;
    height: 266px;
    position: relative;
    button {
        border: 1px solid gray;
        position: absolute;
        top: 15px;
        right: 15px;
        height: 18px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        ${({ theme }) => theme.flexCenter}
        &:hover {
            background: rgba(128, 128, 128, 0.15);
        }
    }
`;

export const AttachBtnWrapper = styled.div`
    display: flex;
    padding: 0 15px;
    & > button {
        width: 29px;
        height: 29px;
        background: #f0f2f5;
        border-radius: 10px;
        ${({ theme }) => theme.flexCenter}
    }
    margin: 12px 0;
`;

export const User = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    align-items: center;
    & > img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        margin-bottom: 5px;
    }
    & > span {
        ${({ theme }) => theme.textStyles.P12}
    }
    margin-top: 10px;
    margin-bottom: 14px;
`;

export const WeatherTab = styled.div`
    /* border: 1px solid gray; */
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    svg {
        cursor: pointer;
    }
    & > input {
        display: none;
    }
    & > label {
        width: 72px;
        height: 40px;
        display: flex;
        justify-content: center;
    }
    & > input#register-sun:checked + label {
        border-bottom: 2px solid ${({ theme }) => theme.colors.sun};
    }
    & > input#register-cloud:checked + label {
        border-bottom: 2px solid ${({ theme }) => theme.colors.cloud};
    }
    & > input#register-rain:checked + label {
        border-bottom: 2px solid ${({ theme }) => theme.colors.rain};
    }
    & > input#register-moon:checked + label {
        border-bottom: 2px solid ${({ theme }) => theme.colors.moon};
    }
`;

export const Form = styled.form`
    width: 286px;
    background: #ffffff;
    box-shadow: 0px 0px 30px 5px rgba(82, 82, 82, 0.15);
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    & > textarea {
        padding: 1rem;
        width: 100%;
        resize: none;
        &::placeholder {
            ${({ theme }) => theme.textStyles.P16}
        }
    }
    & > button {
        ${({ theme }) => theme.textStyles.Sm}
        color: #ffffff;
        width: 268px;
        height: 33px;
        background: ${({ theme }) => theme.colors.gradient};
        border-radius: 50px;
        margin-top: 20px;
    }
`;
