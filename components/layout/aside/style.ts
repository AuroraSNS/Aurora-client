import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: none;
    width: 295px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 0;
    @media screen and (max-width: 1240px) {
        display: none;
    }
`;
