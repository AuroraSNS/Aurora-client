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
        padding: 5px;
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
    padding-left: 15px;
    button {
        width: 29px;
        height: 29px;
        background: #f0f2f5;
        border-radius: 10px;
        ${({ theme }) => theme.flexCenter}
    }
    margin: 12px 0;
`;

export const WeatherTab = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    & > input {
        display: none;
    }
    & > label {
        width: 72px;
        height: 40px;
        display: flex;
        justify-content: center;
        position: relative;
        &::after {
            content: '';
            width: 0%;
            height: 1px;
            position: absolute;
            /* background: #888; */
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            transition: width 0.5s;
        }
    }

    & > input#register-sun:checked + label:after {
        border-bottom: 2px solid ${({ theme }) => theme.colors.sun};
        width: 100%;
    }
    & > input#register-cloud:checked + label:after {
        width: 100%;
        border-bottom: 2px solid ${({ theme }) => theme.colors.cloud};
    }
    & > input#register-rain:checked + label:after {
        width: 100%;
        border-bottom: 2px solid ${({ theme }) => theme.colors.rain};
    }
    & > input#register-moon:checked + label:after {
        width: 100%;
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

    .userInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 20px;
        span {
            ${({ theme }) => theme.textStyles.P12}
            margin-top: 5px;
        }
    }

    textarea {
        padding: 1rem;
        min-height: 150px;
        resize: none;
        &::placeholder {
            ${({ theme }) => theme.textStyles.P16}
        }
        &::-webkit-scrollbar {
            width: 6px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #f0f2f5;
            border-radius: 20px;
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
    }
    button[type='submit'] {
        ${({ theme }) => theme.textStyles.Sm}
        color: #ffffff;
        width: 268px;
        height: 33px;
        background: ${({ theme }) => theme.colors.gradient};
        border-radius: 50px;
        margin-top: 10px;
    }
`;
