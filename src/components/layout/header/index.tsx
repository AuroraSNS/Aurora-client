import Link from 'next/link';

import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { RootState } from '../../../redux/modules/reducer';
import FilterBar from './filterBar';
import { Wrapper, Logo } from './style';
import UserInfo from './userInfo';

type Props = {
    filter?: boolean;
};

const Header = ({ filter }: Props) => {
    const { me } = useSelector((state: RootState) => state.user);
    return (
        <Wrapper>
            <div className="inner">
                <Logo>
                    <Link href="/">
                        <a>
                            <Image width={150} height={55} src="/images/logo.png" alt="logo" />
                        </a>
                    </Link>
                </Logo>
                {filter && <FilterBar />}
                {me ? (
                    <UserInfo />
                ) : (
                    <Link href="/login">
                        <a>로그인하러 가기</a>
                    </Link>
                )}
            </div>
        </Wrapper>
    );
};

Header.defaultProps = {
    filter: false,
};

export default Header;
