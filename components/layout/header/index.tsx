import Link from 'next/link';

import React from 'react';
import FilterBar from './filterBar';
import { Wrapper, Logo } from './style';
import UserInfo from './userInfo';

type Props = {
    filter?: boolean;
};

const Header = ({ filter }: Props) => (
    <Wrapper>
        <div className="inner">
            <Logo>
                <Link href="/">
                    <a>
                        <img src="/images/logo.png" alt="logo" />
                    </a>
                </Link>
            </Logo>
            {filter && <FilterBar />}
            <UserInfo />
        </div>
    </Wrapper>
);

Header.defaultProps = {
    filter: false,
};

export default Header;
