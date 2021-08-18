import styled from 'styled-components';

export const Wrapper = styled.section`
    /* border: 1px solid gray; */
    ${({ theme }) => theme.flexCenter}
    flex-direction: column;
    justify-content: space-between;
    width: 135px;
    margin-top: 70px;
    .title {
        ${({ theme }) => theme.textStyles.H14}
        text-align: center;
        margin-bottom: 27px;
    }
`;

export const Container = styled.div`
    ${({ theme }) => theme.flexCenter}
    justify-content: space-between;
    width: 100%;
    img {
        /* width: 60px; */
    }
`;

export const Content = styled.div`
    ${({ theme }) => theme.textStyles.H16}
    display: flex;
    flex-direction: column;
    div:first-child {
        margin-bottom: 4px;
    }
    span {
        ${({ theme }) => theme.textStyles.P12}
    }
    span:first-child {
        color: #9ac6f0;
    }
    span:nth-child(2) {
        margin: 0 2px;
    }
    span:last-child {
        color: #ed9a9a;
    }
`;
