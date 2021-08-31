import styled from 'styled-components';

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    ${({ theme }) => theme.flexCenter}
    margin-right: 37px;
    position: relative;
    span {
        ${({ theme }) => theme.textStyles.P14}
        margin-left: 15px;
    }
    & > button {
        height: 20px;
    }
    .more-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .more {
        background: white;
        box-shadow: 0 0 5px 0 rgba(63, 63, 68, 0.2);
        border-radius: 10px;
        padding: 3px 0;
        position: absolute;
        bottom: -110px;
        right: -10px;
        li {
            padding: 0 10px;
            margin: 10px 0;
            text-align: center;
            &:hover {
                background: rgba(128, 128, 128, 0.1);
            }
        }
        button {
            padding: 10px 0;
            ${({ theme }) => theme.textStyles.P14}
        }
    }
`;
