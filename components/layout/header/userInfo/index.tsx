import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../reducers';
import { Wrapper } from './style';

const UserInfo = () => {
    const { me } = useSelector((state: RootState) => state.user);

    return (
        <Wrapper>
            {me ? (
                <>
                    <img src={me?.avator} alt="avatar" />
                    <span>{me && me.name}</span>
                    {/* <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    {me.name}
                    <DownOutlined />
                </a>
            </Dropdown> */}
                </>
            ) : (
                <Link href="./login">
                    <a>로그인하러 가기</a>
                </Link>
            )}
        </Wrapper>
    );
};

export default UserInfo;
