import React from 'react';
import styled from 'styled-components';
import { IMe } from '../../interfaces/data/user';
import Avatar from '../common/Avatar';
import { IconMsg, IconSend } from '../common/Icon';
import AppLayout from '../layout/AppLayout';
import ChatRoomContainer from './chatroom/ChatRoomContainer';
import MainChatContainer from './mainChat/MainChatContainer';
import { ChatList, MainChat, ThemeBox, Wrapper } from './style';

type Props = {
    me: IMe;
    onClick: (e: any) => void;
    msgTheme: string;
};

const ChatPresenter = ({ me, onClick, msgTheme }: Props) => (
    <AppLayout title="Chat" filter={false}>
        <Wrapper>
            <MainChat>
                <div className="user">
                    <Avatar url={me.avatar} size={36} />
                    <span>{me.name}</span>
                </div>
                <ThemeBox onClick={onClick}>
                    {['sun', 'rain', 'cloud', 'gradient3'].map((themename: string) => (
                        <>
                            <input type="radio" name="theme" id={`theme-${themename}`} value={themename} />
                            <label htmlFor={`theme-${themename}`} />
                        </>
                    ))}
                </ThemeBox>
                <MainChatContainer msgTheme={msgTheme} />
                <form>
                    <input type="text" />
                    <button type="button">
                        <IconSend />
                    </button>
                </form>
            </MainChat>
            <ChatList>
                <div className="user">
                    <Avatar url={me.avatar} size={36} />
                    <span>{me.name}</span>
                    <IconMsg />
                </div>
                <div className="chat-list">
                    <ChatRoomContainer />
                    <ChatRoomContainer />
                    <ChatRoomContainer />
                    <ChatRoomContainer />
                </div>
            </ChatList>
        </Wrapper>
    </AppLayout>
);

export default ChatPresenter;
