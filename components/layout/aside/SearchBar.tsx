import styled from 'styled-components';
import { IconSearch } from '../../Icon';

const SearchBar = () => (
    <Wrapper>
        <IconSearch />
        <input type="text" placeholder="검색" />
    </Wrapper>
);

const Wrapper = styled.div`
    /* border: 1px solid gray; */
    width: 186px;
    height: 30px;
    display: flex;
    align-items: center;
    background-color: #f0f2f5;
    border-radius: 20px;
    padding: 0 16px;
    input {
        width: 100%;
        height: 30px;
        font-size: 12px;
        padding: 7px;
        background-color: transparent;
    }
    margin-top: 50px;
`;

export default SearchBar;
