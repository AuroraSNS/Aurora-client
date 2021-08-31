import styled from 'styled-components';

export const NotificationMsg = styled.div`
    display: flex;
    align-items: center;
    .noti-info {
        margin-left: 15px;
        div {
            ${({ theme }) => theme.textStyles.P14}
        }
        span {
            ${({ theme }) => theme.textStyles.P12}
            color: #707070
        }
    }
    &:hover {
        background: rgba(128, 128, 128, 0.1);
    }
`;

export const Wrapper = styled.section<{
    newNoti: boolean;
}>`
    ${({ theme }) => theme.bgFilter}
    position: relative;
    width: 100%;
    max-width: 720px;
    height: ${({ newNoti }) => (newNoti ? '305px' : '420px')};
    margin-top: ${({ newNoti }) => (newNoti ? '55px' : '30px')};
    background: #fff;
    border-radius: 20px;
    padding: 40px 60px;
    ${({ theme }) => theme.flexCenter}
    flex-direction: column;
    .title {
        ${({ theme }) => theme.textStyles.H16}
        margin-bottom: 40px;
        width: 100%;
    }
    .notifications {
        width: 100%;
        height: ${({ newNoti }) => (newNoti ? '162px' : '280px')};
        overflow: auto;
        ${({ theme }) => theme.scroll}
        & > div:not(:last-child) {
            margin-bottom: 15px;
        }
    }
`;
