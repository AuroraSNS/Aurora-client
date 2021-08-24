import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    margin-top: 55px;
    .bg {
        ${({ theme }) => theme.bgFilter}
    }
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
    position: relative;
    width: 30%;
    max-width: 307px;
    height: inherit;
    .content {
        height: 100%;
        background: #fff;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .chat-list {
            border-top: 1px solid #c4c5c76d;
            padding-top: 23px;
            height: 100%;
            overflow: auto;
            ${({ theme }) => theme.scroll}
        }
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
    input#theme-gradient + label::before {
        background: ${({ theme }) => theme.colors.gradient3};
    }
`;
