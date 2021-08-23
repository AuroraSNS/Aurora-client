import styled from 'styled-components';

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    ${({ theme }) => theme.flexCenter}
    margin-right: 37px;
    span {
        ${({ theme }) => theme.textStyles.P14}
        margin-left: 15px;
    }
`;
