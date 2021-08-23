import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../reducers';
import Avatar from '../../../common/Avatar';
import { Wrapper } from './style';

const UserInfo = () => {
    const { me } = useSelector((state: RootState) => state.user);

    return (
        <Wrapper>
            <Link href={`/user/${me.id}`}>
                <a>
                    <Avatar url={me?.avator} size={54} />
                </a>
            </Link>
            <span>{me && me.name}</span>
            {/* <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    {me.name}
                    <DownOutlined />
                </a>
            </Dropdown> */}
        </Wrapper>
    );
};

export default UserInfo;
