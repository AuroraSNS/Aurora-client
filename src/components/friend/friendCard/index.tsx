import React from 'react';
import styled from 'styled-components';
import { IAuth } from '../../../interfaces/user';
import Avatar from '../../common/Avatar';

type Props = {
    id: number;
    user: IAuth;
    onClick: (id: number, user: IAuth) => void;
    text: string;
};

const FriendCard = ({ id, user, onClick, text }: Props) => (
    <Wrapper>
        <div className="avatar">
            <Avatar url="" size={142} />
        </div>
        <div className="info">
            <span>{user.name}</span>
            <button
                type="button"
                onClick={() => {
                    onClick(id, user);
                }}
            >
                {text}
            </button>
        </div>
    </Wrapper>
);

const Wrapper = styled.div`
    width: 142px;
    height: 180px;
    display: flex;
    flex-direction: column;
    margin: 8px;
    border-radius: 20px;
    box-shadow: 0 0 5px gray;
    overflow: hidden;
    .avatar {
        img {
            border-radius: 0;
        }
    }
    .info {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        span {
            ${({ theme }) => theme.textStyles.H12}
        }
        button {
            ${({ theme }) => theme.textStyles.P10}
            width: 56px;
            height: 18px;
            background: ${({ theme }) => theme.colors.gradient};
            border-radius: 50px;
            color: white;
        }
    }
`;

export default FriendCard;
