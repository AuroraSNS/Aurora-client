import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;
    max-width: 285px;
    height: 100%;
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    padding: 30px;
    & > div {
        display: flex;
        align-items: center;
        margin: 10px 0;
        span {
            ${({ theme }) => theme.textStyles.P12}
            color: #707070;
            margin-left: 18px;
        }
    }
    .content {
        ${({ theme }) => theme.textStyles.P16}
        ${({ theme }) => theme.scroll}
        max-height: 200px;
        overflow: auto;
    }
`;

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    width: 90vw;
    height: 80vh;
    box-shadow: 0 0 30px 5px rgba(82, 82, 82, 0.15);
    background-color: white;
    border-radius: 20px;
    /* padding: 0 20px; */
    display: flex;
    @media screen and (max-width: 1240px) {
        width: 100vw;
        height: 100vh;
    }
`;
