import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/modules/reducer';
import FilterBar from './filterBar';
import { Wrapper, Logo, LogInBtn } from './style';
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
                        <a>Aurora</a>
                    </Link>
                </Logo>
                {filter && <FilterBar />}
                {me ? (
                    <UserInfo />
                ) : (
                    <Link href="/login">
                        <a>
                            <LogInBtn>Log in</LogInBtn>
                        </a>
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
