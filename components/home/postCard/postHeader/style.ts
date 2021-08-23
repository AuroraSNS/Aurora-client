import styled from 'styled-components';

export const Wrapper = styled.section`
    /* border: 1px solid gray; */
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        margin-right: 12px;
    }
    div {
        display: flex;
        flex-direction: column;
        & > span:first-child {
            ${({ theme }) => theme.textStyles.H14}
        }
        & > span:last-child {
            ${({ theme }) => theme.textStyles.P12}
        }
    }
    svg {
        position: absolute;
        right: 0;
    }
`;
