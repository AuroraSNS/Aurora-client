import Link from 'next/link';
import styled from 'styled-components';

import React from 'react';
import FilterBar from '../components/FilterBar';
import UserInfo from './UserInfo';

type Props = {
    filter?: boolean;
};

const Header = ({ filter }: Props) => (
    <Wrapper>
        <Logo>
            <Link href="/">
                <a>
                    <img src="/images/logo.png" alt="logo" />
                </a>
            </Link>
        </Logo>

        {filter && <FilterBar />}
        <UserInfo />
    </Wrapper>
);

Header.defaultProps = {
    filter: false,
};

const Wrapper = styled.header`
    box-shadow: 0px 4px 2px rgba(119, 119, 119, 0.25);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const Logo = styled.div`
    /* border: 1px solid gray; */
    flex: none;
    img {
        width: 150px;
    }
`;

export default Header;
