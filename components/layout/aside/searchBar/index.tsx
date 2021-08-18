import React from 'react';
import { IconSearch } from '../../../common/Icon';
import { Wrapper } from './style';

const SearchBar = () => (
    <Wrapper>
        <IconSearch />
        <input type="text" placeholder="검색" />
    </Wrapper>
);

export default SearchBar;
