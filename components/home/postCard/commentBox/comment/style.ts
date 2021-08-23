import styled from 'styled-components';

export const Wrapper = styled.div<{ vertical: boolean }>`
    display: flex;
    flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
    margin: 5px 0;
    div {
        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
        }
        span {
            ${({ theme }) => theme.textStyles.H12}
            margin: 0 8px;
        }
        p {
            ${({ theme }) => theme.textStyles.P12}
            margin-right: 10px;
        }
        display: flex;
        align-items: center;
    }
    .more-options {
        display: flex;
        ${({ theme }) => theme.textStyles.P12}
        span {
            cursor: pointer;
        }
        z-index: 9;
    }
`;

export const EditForm = styled.form`
    input {
        background: rgba(128, 128, 128, 0.1);
        background-color: #f0f2f5;
        border-radius: 10px;
    }
`;
