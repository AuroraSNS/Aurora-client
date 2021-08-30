import styled from 'styled-components';

export const IconMood = styled.div<{ mood: string }>`
    background-image: url('images/aurora_icon.png');
    background-repeat: no-repeat;
    ${({ mood }) =>
        mood === 'sun' &&
        `
        background-position:  -180px -107px;
        width: 32px;
        height: 32px;
        `};
    ${({ mood }) =>
        mood === 'cloud' &&
        `
        background-position:  -225px -112px;
        width: 35px;
        height: 23px;
        `};
    ${({ mood }) =>
        mood === 'rain' &&
        `
        background-position:  -273px -108px;
        width: 34px;
        height: 30px;
        `};
    ${({ mood }) =>
        mood === 'moon' &&
        `
        background-position:  -320px -105px;
        width: 31px;
        height: 32px;
        `};
`;

export const Wrapper = styled.section`
    /* border: 1px solid gray; */
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    div.info {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        & > span:first-child {
            ${({ theme }) => theme.textStyles.H14}
        }
        & > span:last-child {
            ${({ theme }) => theme.textStyles.P12}
        }
    }
    ${IconMood} {
        position: absolute;
        right: 0;
    }
`;
