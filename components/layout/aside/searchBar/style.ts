import styled from 'styled-components';

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    width: 186px;
    height: 30px;
    display: flex;
    align-items: center;
    background-color: #f0f2f5;
    border-radius: 20px;
    padding: 0 16px;
    input {
        ${({ theme }) => theme.textStyles.P12}
        width: 100%;
        height: 30px;
        padding: 7px;
        background-color: transparent;
    }
    margin-top: 50px;
`;
