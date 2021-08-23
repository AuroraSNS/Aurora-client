import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom: 10px;
    border-radius: 50px;

    ${({ theme }) => theme.borderGradient}
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #a18afc, #b6d8f8, #ffbebe);
    /* background-image: linear-gradient(white, white), radial-gradient(circle at top left, #ffbebe, #b6d8f8, #a18afc); */

    display: flex;
    justify-content: center;
    a {
        ${({ theme }) => theme.flexCenter}
        background-color: white;
        border-radius: 50px;
        width: 320px;
        height: 45px;
        span {
            ${({ theme }) => theme.textStyles.P12}
            margin-left: 8px;
        }
    }
`;
