import styled from 'styled-components';

export const Wrapper = styled.div<{ msgTheme: string }>`
    ${({ theme }) => theme.textStyles.P12}
    ${({ theme }) => theme.scroll}
    overflow: auto;
    /* height: 560px; */
    position: relative;
    margin-top: 23px;
    .chat__timestamp {
        text-align: center;
        color: #707070;
        margin-bottom: 20px;
    }
    .message-row {
        display: flex;
        margin-bottom: 25px;
    }
    .message-row__content {
        display: flex;
        flex-direction: column;
        margin-top: 2px;
    }
    .message__info {
        display: flex;
        align-items: flex-end;
        margin-bottom: 5px;
    }

    .message__bubble {
        ${({ theme }) => theme.textStyles.P14}
        padding: 7px 15px;
        border-radius: 20px;
        border: 1px solid ${({ theme, msgTheme }) => theme.colors[msgTheme]};
        margin-right: 5px;
        margin-left: 13px;
        max-width: 267px;
        word-break: break-all;
        line-height: 1.7;
    }

    .message__time {
        opacity: 0.8;
        color: #707070;
    }

    .message-row__own,
    .message-row__own .message__info {
        flex-direction: row-reverse;
    }

    .message-row__own .message__bubble {
        background-color: ${({ theme, msgTheme }) => theme.colors[msgTheme]};
        margin-right: 13px;
        margin-left: 5px;
    }
`;
