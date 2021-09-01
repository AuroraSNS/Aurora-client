import styled from 'styled-components';

export const Wrapper = styled.section`
    /* border: 1px solid gray; */
    ${({ theme }) => theme.flexCenter}
    flex-direction: column;
    justify-content: space-between;
    margin-top: 70px;
    .title {
        ${({ theme }) => theme.textStyles.H14}
        text-align: center;
        margin-bottom: 27px;
    }
`;

export const IconWeather = styled.div<{
    index: number;
}>`
    background-image: url('/images/aurora_icon.png');
    background-repeat: no-repeat;
    margin-right: 20px;
    ${({ index }) =>
        index === 0 &&
        `
        background-position:  -7px -209px;
        width: 66px;
        height: 66px;
        `}
    ${({ index }) =>
        index === 1 &&
        `
        background-position: -99px -212px;
        width: 76px;
        height: 60px;
        `};
    ${({ index }) =>
        index === 2 &&
        `
        background-position: -201px -220px;
        width: 68px;
        height: 44px;
        `};
    ${({ index }) =>
        index === 3 &&
        `
        background-position: -295px -213px;
        width: 68px;
        height: 59px;
        `};
    ${({ index }) =>
        index === 4 &&
        `
        background-position: -389px -213px;
        width: 68px;
        height: 63px;
        `};
    ${({ index }) =>
        index === 5 &&
        `
        background-position: -482px -213px;
        width: 60px;
        height: 65px;
        `};
`;

export const Container = styled.div`
    ${({ theme }) => theme.flexCenter}
    justify-content: space-between;
    width: 100%;
    .content {
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
    }
`;
