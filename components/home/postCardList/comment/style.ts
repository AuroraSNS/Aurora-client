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
        }
        display: flex;
        align-items: center;
    }
`;
