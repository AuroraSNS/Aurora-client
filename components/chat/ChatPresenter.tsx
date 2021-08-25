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
                <div className="bg" />
                <div className="content">
                    <div className="user">
                        <Avatar url={me.avatar} size={36} />
                        <span>{me.name}</span>
                    </div>
                    <ThemeBox onClick={onClick}>
                        <input type="radio" name="theme" id="theme-sun" value="sun" />
                        <label htmlFor="theme-sun" />
                        <input type="radio" name="theme" id="theme-rain" value="rain" />
                        <label htmlFor="theme-rain" />
                        <input type="radio" name="theme" id="theme-cloud" value="cloud" />
                        <label htmlFor="theme-cloud" />
                        <input type="radio" name="theme" id="theme-moon" value="moon" />
                        <label htmlFor="theme-moon" />
                        <input type="radio" name="theme" id="theme-gradient" value="gradient3" />
                        <label htmlFor="theme-gradient" />
                    </ThemeBox>
                    <MainChatContainer msgTheme={msgTheme} />
                    <form>
                        <input type="text" />
                        <button type="button">
                            <IconSend />
                        </button>
                    </form>
                </div>
            </MainChat>
            <ChatList>
                <div className="bg" />
                <div className="content">
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
                </div>
            </ChatList>
        </Wrapper>
    </AppLayout>
);

export default ChatPresenter;
