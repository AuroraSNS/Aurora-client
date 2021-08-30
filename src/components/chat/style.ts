import styled from 'styled-components';

export const ChatRoom = styled.div`
    display: flex;
    align-items: center;
    padding: 9px 10px;
    .room-info {
        flex: 1;
        margin-left: 13px;
        & > span {
            ${({ theme }) => theme.textStyles.P12}
        }
        & > div {
            margin-top: 3px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span:first-child {
                ${({ theme }) => theme.textStyles.P12}
                color: #707070;
            }
            span:last-child {
                ${({ theme }) => theme.textStyles.P10}
                color: #707070;
            }
        }
    }
    cursor: pointer;
    &:hover {
        background: rgba(128, 128, 128, 0.1);
    }
`;

export const MainChat = styled.section`
    ${({ theme }) => theme.bgFilter}
    position: relative;
    width: 70%;
    max-width: 710px;
    height: 100%;
    background: #fff;
    border-radius: 20px;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    form {
        margin-top: 10px;
        display: flex;
        input {
            background: #f0f2f5;
            border-radius: 20px;
            padding: 0 10px;
            width: 578px;
            height: 36px;
            margin-right: 13px;
        }
        button {
            ${({ theme }) => theme.flexCenter};
            background: ${({ theme }) => theme.colors.gradient};
            border-radius: 50px;
            width: 52px;
            opacity: 0.7;
            &:hover {
                opacity: 1;
            }
            div {
                background: url('images/aurora_icon.png') no-repeat -615px -169px;
                width: 18px;
                height: 18px;
            }
        }
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    margin-top: 55px;
    .user {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            ${({ theme }) => theme.textStyles.H14}
            margin-left: 10px;
        }
        svg {
            margin-left: 55px;
        }
        margin-bottom: 23px;
    }
`;

export const ChatList = styled.section`
    ${({ theme }) => theme.bgFilter}
    position: relative;
    width: 30%;
    max-width: 307px;
    height: 100%;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .msgIcon {
        color: transparent;
        background: url('images/aurora_icon.png') no-repeat -534px -112px;
        width: 28px;
        height: 20px;
    }
    .chat-list {
        border-top: 1px solid #c4c5c76d;
        padding-top: 23px;
        height: 100%;
        overflow: auto;
        ${({ theme }) => theme.scroll}
    }
`;

export const ThemeBox = styled.div`
    position: absolute;
    right: 55px;
    top: 80px;
    display: flex;
    input {
        display: none;
    }
    label {
        &:not(:last-child) {
            margin-right: 8px;
        }
        &::before {
            content: '';
            display: block;
            width: 12px;
            height: 12px;

            border-radius: 50px;
            cursor: pointer;
        }
    }
    input#theme-sun + label::before {
        background: ${({ theme }) => theme.colors.sun};
    }
    input#theme-rain + label::before {
        background: ${({ theme }) => theme.colors.rain};
    }
    input#theme-cloud + label::before {
        background: ${({ theme }) => theme.colors.cloud};
    }
    input#theme-moon + label::before {
        background: ${({ theme }) => theme.colors.moon};
    }
    input#theme-gradient3 + label::before {
        background: ${({ theme }) => theme.colors.gradient3};
    }
`;
