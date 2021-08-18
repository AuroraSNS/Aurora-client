import styled from 'styled-components';

export const Wrapper = styled.section`
    /* border: 1px solid gray; */
    width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 69px;
    .title {
        ${({ theme }) => theme.textStyles.H14}
        text-align: center;
        margin-bottom: 26px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const FriendCard = styled.div`
    width: 63px;
    height: 111px;
    ${({ theme }) => theme.flexCenter}
    flex-direction: column;
    justify-content: space-between;
    div {
        width: 58px;
        height: 58px;
        background: #f0f2f5;
        border-radius: 10px;
        padding: 10px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    span {
        ${({ theme }) => theme.textStyles.P12}
    }
    button {
        ${({ theme }) => theme.textStyles.P10}
        background: ${({ theme }) => theme.colors.gradient};
        color: #ffffff;
        border-radius: 30px;
    }
`;
