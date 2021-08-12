import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../reducers';

const UserInfo = () => {
    const { me } = useSelector((state: RootState) => state.user);

    return (
        <Wrapper>
            <img src="/images/profile-thumbnail.jpg" alt="avatar" />
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

const Wrapper = styled.div`
    /* border: 1px solid gray; */
    margin-right: 37px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
        cursor: pointer;
        height: 54px;
        width: 54px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid #d2d2d2;
        margin-right: 22px;
    }
    span {
        font-size: 14px;
        line-height: 17px;
    }
`;

export default UserInfo;
