import React from 'react';
import styled from 'styled-components';
import { IMe } from '../../../interfaces/data/user';
import Avatar from '../../common/Avatar';

type Props = {
    me: IMe;
};

const ChatRoomPresenter = ({ me }: Props) => (
    <Wrapper>
        <Avatar url={me.avatar} size={36} />
        <div className="room-info">
            <span>{me.name}</span>
            <div>
                <span>안녕</span>
                <span>1일</span>
            </div>
        </div>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 9px 10px;
    .room-info {
        flex: 1;
        margin-left: 13px;
        & > span {
            ${({ theme }) => theme.textStyles.P12}
        }
        & > div {
            margin-top: 3px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span:first-child {
                ${({ theme }) => theme.textStyles.P12}
                color: #707070;
            }
            span:last-child {
                ${({ theme }) => theme.textStyles.P10}
                color: #707070;
            }
        }
    }
    cursor: pointer;
    &:hover {
        background: rgba(128, 128, 128, 0.1);
    }
`;

export default ChatRoomPresenter;
