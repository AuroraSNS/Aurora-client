import styled from 'styled-components';

export const Wrapper = styled.section<{ ht: string }>`
    /* border: 1px solid gray; */
    margin-top: 25px;
    max-height: ${(props) => props.ht};
    overflow: auto;
    ${({ theme }) => theme.scroll}
`;
