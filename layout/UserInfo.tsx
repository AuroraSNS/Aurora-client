import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../reducers';

const UserInfo = () => {
    const { me } = useSelector((state: RootState) => state.user);

    const menu = (
        <Menu>
            <Menu.Item key="1">회원정보 수정</Menu.Item>
            <Menu.Item key="2">로그아웃</Menu.Item>
        </Menu>
    );
    return (
        <Wrapper>
            <img src="/images/profile-thumbnail.jpg" alt="avatar" />
            <span>user1</span>
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
    display: flex;
    width: 12rem;
    align-items: center;
    justify-content: flex-start;
    img {
        cursor: pointer;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid #d2d2d2;
        margin-right: 22px;
    }
    span {
        font-size: 20px;
        line-height: 23px;
    }
`;

export default UserInfo;
