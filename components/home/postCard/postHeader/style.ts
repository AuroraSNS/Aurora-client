import styled from 'styled-components';

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
    svg {
        position: absolute;
        right: 0;
    }
`;
