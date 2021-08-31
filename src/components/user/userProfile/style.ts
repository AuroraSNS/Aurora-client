import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => theme.flexCenter}
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
    .profile-info {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        div {
            ${({ theme }) => theme.flexCenter}
        }
    }
    .name {
        ${({ theme }) => theme.textStyles.H18}
        margin-right: 10px;
    }
    .bio {
        ${({ theme }) => theme.textStyles.P14}
        margin-top: 15px;
    }
    .editBtn {
        width: 46px;
        height: 22px;
        ${({ theme }) => theme.textStyles.P12}
        border-radius: 50px;
        background: ${({ theme }) => theme.colors.gradient2};
        opacity: 0.8;
        color: #fff;
        &:hover {
            opacity: 1;
        }
    }
    .friend {
        width: 60px;
        height: 22px;
        ${({ theme }) => theme.textStyles.P12}
        border-radius: 50px;
        background: ${({ theme }) => theme.colors.gradient2};
        opacity: 0.8;
        color: #fff;
        &:hover {
            opacity: 1;
        }
    }
`;
