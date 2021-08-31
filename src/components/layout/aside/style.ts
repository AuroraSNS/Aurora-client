import styled from 'styled-components';
import SearchBar from '../../common/searchBar';

export const Wrapper = styled.div`
    flex: none;
    width: 295px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 50px;
    /* ${SearchBar} {
        margin-top: 50px;
    } */
    @media screen and (max-width: 1240px) {
        display: none;
    }
`;
