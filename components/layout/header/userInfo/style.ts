import styled from 'styled-components';

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    ${({ theme }) => theme.flexCenter}
    margin-right: 37px;
    img {
        cursor: pointer;
        height: 54px;
        width: 54px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid #d2d2d2;
        margin-right: 22px;
    }
    span {
        ${({ theme }) => theme.textStyles.P14}
    }
`;
