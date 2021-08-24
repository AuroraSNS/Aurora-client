/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { INotification } from '../../interfaces/data/notification';
import Avatar from './Avatar';

type Props = {
    newNoti?: boolean;
    notis: INotification[];
};

const NotificationBox = ({ newNoti, notis }: Props) => (
    <Wrapper newNoti={newNoti as boolean}>
        <div className="bg" />
        <div className="content">
            <div className="title">{newNoti ? '새로운 알림' : '이전 알림'}</div>
            <div className="notifications">
                {notis?.map((ele) => (
                    <NotificationMsg key={ele.id}>
                        <Avatar url="" size={44} />
                        <div className="noti-info">
                            <div>{ele.content}</div>
                            <span>{ele.time}22 mins ago</span>
                        </div>
                    </NotificationMsg>
                ))}
            </div>
        </div>
    </Wrapper>
);

NotificationBox.defaultProps = {
    newNoti: false,
};

const NotificationMsg = styled.div`
    display: flex;
    align-items: center;
    .noti-info {
        margin-left: 15px;
        div {
            ${({ theme }) => theme.textStyles.P14}
        }
        span {
            ${({ theme }) => theme.textStyles.P12}
            color: #707070
        }
    }
`;

const Wrapper = styled.section<{
    newNoti: boolean;
}>`
    position: relative;
    width: 100%;
    max-width: 720px;
    height: ${({ newNoti }) => (newNoti ? '305px' : '420px')};
    margin-top: ${({ newNoti }) => (newNoti ? '55px' : '30px')};
    .bg {
        ${({ theme }) => theme.bgFilter}
    }
    .content {
        /* filter: none; */
        max-width: 710px;
        height: 100%;
        background: #fff;
        border-radius: 20px;
        padding: 40px 60px;
        .title {
            ${({ theme }) => theme.textStyles.H16}
            margin-bottom: 40px;
        }
        .notifications {
            height: ${({ newNoti }) => (newNoti ? '162px' : '280px')};
            overflow: auto;
            ${({ theme }) => theme.scroll}
            & > div:not(:last-child) {
                margin-bottom: 15px;
            }
        }
    }
`;

export default NotificationBox;
